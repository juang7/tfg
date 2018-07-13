package com.jfgp.Tfg.dao;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jfgp.Tfg.model.ComidaPorCantidad;

@RepositoryRestResource(path = "comidaporcantidad")
public interface ComidaPorCantidadRepository extends PagingAndSortingRepository<ComidaPorCantidad, Integer> {

}
