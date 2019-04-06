package com.jfgp.Tfg.dao;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jfgp.Tfg.model.Mesa;

@RepositoryRestResource(path = "mesa")
public interface MesaRepository extends PagingAndSortingRepository<Mesa, Integer> {
	List<Mesa> findByNumero(@Param("numero") Integer numero);
	List<Mesa> findByPlazas(@Param("plazas") Integer plazas);
	List<Mesa> findByQr(@Param("qr") String qr);
	List<Mesa> findByBarId(@Param("bar") Integer bar);
}
