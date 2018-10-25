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
public class MultiplexServiceImpl implements MultiplexService{
	
	@Autowired
	private MultiplexRepository MultiplexesRepo;
	
	@Override
	public Multiplex getMultiplexById(String mulname) {
		Multiplex multiplexes =null;
	
		Optional<Multiplex> optContact=MultiplexesRepo.findById(mulname);
		if(optContact.isPresent()){
			multiplexes=optContact.get();
		}
		
		return multiplexes;
	}

	@Override
	public List<Multiplex> getAllMultiplexes() {
		return MultiplexesRepo.findAll();
	}

	@Override
	public Multiplex findByLocation(String location) {
		
		return MultiplexesRepo.findByLocation(location);
	}
	
	@Override
	public Multiplex findByContactno(String contactno) {
		return MultiplexesRepo.findByContactno(contactno);
	}

	@Override
	public Multiplex findByMulname(String mulname) {
		return MultiplexesRepo.findByMulname(mulname);
	}

	@Override
	public Multiplex addMultiplex(Multiplex multiplex) {
		return MultiplexesRepo.save(multiplex);
	}
}
