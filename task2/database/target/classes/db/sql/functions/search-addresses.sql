CREATE OR REPLACE FUNCTION public.search_addresses(search_terms text[], limit_count integer, city text)
    RETURNS TABLE(id integer, label varchar, latitude numeric, longitude numeric)
    LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
        EXECUTE format('
            SELECT *
            FROM %I
            WHERE address ILIKE ANY(SELECT ''%%'' || term || ''%%'' FROM unnest($1) AS term)
            ORDER BY address <-> array_to_string($1, '' '')
            LIMIT $2', city || '_addresses')
        USING search_terms, limit_count;
END;
$function$
