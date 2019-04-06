package com.jfgp.Tfg.dao;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jfgp.Tfg.model.Categoria;

@RepositoryRestResource(path = "categoria" )
public interface CategoriaRepository extends PagingAndSortingRepository<Categoria, Integer> {
	List<Categoria> findByNombreContaining(@Param("nombre") String name);
}



