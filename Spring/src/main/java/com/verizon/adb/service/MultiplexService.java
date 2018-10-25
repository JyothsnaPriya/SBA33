package com.verizon.adb.service;

import java.util.List;

import com.verizon.adb.model.Manager;
import com.verizon.adb.model.Multiplex;
import com.verizon.adb.model.Multiplex;

public interface MultiplexService {
	Multiplex getMultiplexById(String mulname);
	Multiplex addMultiplex(Multiplex multiplex);
	
	List<Multiplex> getAllMultiplexes();

	Multiplex findByLocation(String location);
	Multiplex findByContactno(String contcatno);
	Multiplex findByMulname(String mulname);

}
