package com.jfgp.Tfg.dao;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jfgp.Tfg.model.Categoria;
import com.jfgp.Tfg.model.Comida;

@RepositoryRestResource(path = "comida")
public interface ComidaRepository extends PagingAndSortingRepository<Comida, Integer> {
	List<Comida> findByNombreContaining(@Param("nombre") String name);
	List<Comida> findByDescripcionContaining(@Param("descripcion") String descripcion);
	List<Comida> findByCategoriaId(@Param("categoria") Integer categoria);
	List<Comida> findByPrecioLessThanEqual(@Param("precio") Double precio);
	List<Comida> findByPrecioGreaterThanEqual(@Param("precio") Double precio);

}
