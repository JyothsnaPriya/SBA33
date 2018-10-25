package com.verizon.adb.service;

import java.util.List;

import com.verizon.adb.model.Manager;
import com.verizon.adb.model.Multiplex;
import com.verizon.adb.model.Multiplex;

public interface ManagerService {
	Manager getManagerById(long managerid);
	Manager addManager(Manager manager);
	Manager updateManager(Manager manager);
	
	boolean deleteManager(long managerid);
	
	List<Manager> getAllManagers();
	
	Manager findByFirstname(String firstname);
	Manager findByAddress(String address);
	Manager findByMobilenumber(String mobilenumber);
	
	
	
		
}
