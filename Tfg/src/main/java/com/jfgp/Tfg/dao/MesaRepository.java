package com.jfgp.Tfg.dao;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jfgp.Tfg.model.Mesa;

@RepositoryRestResource(path = "mesa")
public interface MesaRepository extends PagingAndSortingRepository<Mesa, Integer> {

}
