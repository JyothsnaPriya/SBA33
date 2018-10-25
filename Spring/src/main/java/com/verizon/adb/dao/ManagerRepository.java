package com.verizon.adb.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.verizon.adb.model.Manager;
import com.verizon.adb.model.Multiplex;

@Repository 
public interface ManagerRepository extends JpaRepository<Manager,Long>{

	Manager findByFirstName(String firstname);
	Manager findByMobileNUmber(String mobilenumber);
	Manager findByAddress(String address);
	boolean existsById(long managerid);

}