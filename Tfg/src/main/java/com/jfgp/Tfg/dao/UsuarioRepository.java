package com.jfgp.Tfg.dao;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jfgp.Tfg.model.Usuario;

@RepositoryRestResource(path = "usuario")
public interface UsuarioRepository extends PagingAndSortingRepository<Usuario, Integer> {
	List<Usuario> findByNombreContaining(@Param("nombre") String name);
	List<Usuario> findByApellidosContaining(@Param("apellidos") String apellidos);
	List<Usuario> findByEmailContaining(@Param("email") String email);
	List<Usuario> findBytelefonoContaining(@Param("telefono") String telefono);


}

