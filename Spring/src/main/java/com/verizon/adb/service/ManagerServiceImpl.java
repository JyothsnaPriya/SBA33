package com.verizon.adb.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.verizon.adb.dao.MultiplexRepository;
import com.verizon.adb.dao.ManagerRepository;
import com.verizon.adb.dao.ManagerRepository;
import com.verizon.adb.model.Manager;
import com.verizon.adb.model.Multiplex;

@Service 
public class ManagerServiceImpl implements ManagerService{
	
	@Autowired
	private ManagerRepository ManagerRepo;

	@Override
	public Manager getManagerById(long managerid) {
		Manager managers =null;
		
		Optional<Manager> optContact=ManagerRepo.findById(managerid);
		if(optContact.isPresent()){
			managers=optContact.get();
		}
		
		return managers;
	}

	@Override
	public List<Manager> getAllManagers() {
		return ManagerRepo.findAll();
	}

	@Override
	public Manager findByFirstname(String firstname) {
		return ManagerRepo.findByFirstName(firstname);
	}

	@Override
	public Manager findByAddress(String address) {
		return ManagerRepo.findByAddress(address);
	}

	@Override
	public Manager findByMobilenumber(String mobilenumber) {
		return ManagerRepo.findByMobileNUmber(mobilenumber);
	}
	
	@Override
	public Manager addManager(Manager manager) {
		return ManagerRepo.save(manager);
	}

	@Override
	public Manager updateManager(Manager manager) {
	return ManagerRepo.save(manager);
	}

	@Override
	public boolean deleteManager(long managerid) {
		boolean isDeleted=false;
		if(ManagerRepo.existsById((long) managerid)) {
			ManagerRepo.deleteById((long) managerid);
			isDeleted=true;
		}
		return isDeleted;
	}

}
