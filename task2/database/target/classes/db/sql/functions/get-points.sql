CREATE OR REPLACE FUNCTION public.get_points(pointstring text, radius integer, city text)
 RETURNS TABLE(latitude double precision, longitude double precision)
 LANGUAGE plpgsql
AS $function$
BEGIN
EXECUTE format('CREATE TEMP TABLE IF NOT EXISTS temptable AS
        SELECT * FROM %I
        WHERE ST_DWithin(ST_SetSRID(geom, 4326)::geography,
                         ST_GeomFromText($1, 4326)::geography,
                         $2)', city || '_geo_points')
    USING pointstring, radius;

RETURN QUERY SELECT ST_Y(ST_Transform(geom, 4326)) AS longitude,
                         ST_X(ST_Transform(geom, 4326)) AS latitude
                  FROM temptable;

EXECUTE 'DROP TABLE IF EXISTS temptable';
END;
$function$
