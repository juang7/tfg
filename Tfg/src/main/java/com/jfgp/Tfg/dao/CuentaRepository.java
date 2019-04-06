package com.jfgp.Tfg.dao;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jfgp.Tfg.model.Categoria;
import com.jfgp.Tfg.model.Cuenta;

@RepositoryRestResource(path = "cuenta")
public interface CuentaRepository extends PagingAndSortingRepository<Cuenta, Integer> {
	List<Cuenta> findByMesaId(@Param("mesa") String mesa);
	List<Cuenta> findByUsuarioId(@Param("usuario") String usuario);
	
}
