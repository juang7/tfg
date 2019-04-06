package com.jfgp.Tfg.dao;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jfgp.Tfg.model.Bar;
import com.jfgp.Tfg.model.Usuario;

@RepositoryRestResource(path = "bar")
public interface BarRepository extends PagingAndSortingRepository<Bar, Integer> {
	List<Bar> findByNombreContaining(@Param("nombre") String name);
	List<Bar> findByUbicacionContaining(@Param("ubicacion") String name);
	List<Bar> findByDescripcionContaining(@Param("descripcion") String descripcion);
	List<Bar> findByRangoPrecio(@Param("rangoPrecio") String rangoPrecio);
}
