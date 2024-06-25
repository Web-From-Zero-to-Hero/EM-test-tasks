INSERT INTO moscow_geo_points(id, geom)
SELECT id, ST_SetSRID(ST_MakePoint(longitude, latitude), 4326) AS geom
FROM moscow_points;