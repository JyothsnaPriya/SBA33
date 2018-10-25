package com.verizon.adb.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.verizon.adb.model.Manager;
import com.verizon.adb.model.Multiplex;

@Repository 
public interface MultiplexRepository extends JpaRepository<Multiplex, String>{
	
	Multiplex findByMulname(String mulname);
	Multiplex findByContactno(String contactno);
	Multiplex findByLocation(String location);

}