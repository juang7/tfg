package com.jfgp.Tfg.dao;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jfgp.Tfg.model.Bar;

@RepositoryRestResource(path = "bar")
public interface BarRepository extends PagingAndSortingRepository<Bar, Integer> {

}
