package com.jfgp.Tfg.dao;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jfgp.Tfg.model.Usuario;

@RepositoryRestResource(path = "usuario")
public interface UsuarioRepository extends PagingAndSortingRepository<Usuario, Integer> {

}
