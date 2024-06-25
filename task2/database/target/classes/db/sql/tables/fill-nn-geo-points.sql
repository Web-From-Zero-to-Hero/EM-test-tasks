INSERT INTO nizhny_novgorod_geo_points(id, geom)
SELECT id, ST_SetSRID(ST_MakePoint(longitude, latitude), 4326) AS geom
FROM nizhny_novgorod_points;