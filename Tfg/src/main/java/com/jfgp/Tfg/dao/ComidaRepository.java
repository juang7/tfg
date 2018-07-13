package com.jfgp.Tfg.dao;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jfgp.Tfg.model.Comida;

@RepositoryRestResource(path = "comida")
public interface ComidaRepository extends PagingAndSortingRepository<Comida, Integer> {

}
