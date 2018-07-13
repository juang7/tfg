package com.jfgp.Tfg.dao;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.jfgp.Tfg.model.Categoria;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "categoria" )
public interface CategoriaRepository extends PagingAndSortingRepository<Categoria, Integer> {

}
