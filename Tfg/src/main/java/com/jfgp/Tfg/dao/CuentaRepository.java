package com.jfgp.Tfg.dao;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jfgp.Tfg.model.Cuenta;

@RepositoryRestResource(path = "cuenta")
public interface CuentaRepository extends PagingAndSortingRepository<Cuenta, Integer> {

}
