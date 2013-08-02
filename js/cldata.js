function getTime(i){
	if(i=="08:00")return 1;
	if(i=="08:30")return 2;
	if(i=="09:00")return 3;
	if(i=="09:30")return 4;
	if(i=="10:00")return 5;
	if(i=="10:30")return 6;
	if(i=="11:00")return 7;
	if(i=="11:30")return 8;
	if(i=="12:00")return 9;
	if(i=="12:30")return 10;
	if(i=="13:00")return 11;
	if(i=="13:30")return 12;
	if(i=="14:00")return 13;
	if(i=="14:30")return 14;
	if(i=="15:00")return 15;
	if(i=="15:30")return 16;
	if(i=="16:00")return 17;
	if(i=="16:30")return 18;
	if(i=="17:00")return 19;
	if(i=="17:30")return 20;
	if(i=="18:00")return 21;
	if(i=="19:00")return 22;
	if(i=="19:30")return 23;
	if(i=="20:00")return 24;
	
}

var data =[
			{"sc":"1","code":"01175112","subject":"Badminton","credit":1,"time":{"day":["Thu"],"start":["08:00"],"end":["10:00"]},"place":"Sports Office","teacher":"","sec":"450","addStart":[getTime("08:00")],"addEnd":[getTime("10:00")-1]},
			{"sc":"1","code":"01175114","subject":"Table Tennis","credit":1,"time":{"day":["Fri"],"start":["8:00"],"end":["10:00"]},"place":"Chakkapan Building","teacher":"","sec":"450","addStart":[getTime("08:00")],"addEnd":[getTime("10:00")-1]},
			{"sc":"1","code":"01175123","subject":"Basketball","credit":1,"time":{"day":["Fri"],"start":["08:00"],"end":["10:00"]},"place":"Sports Office","teacher":"","sec":"450","addStart":[getTime("08:00")],"addEnd":[getTime("10:00")-1]},
			{"sc":"1","code":"01175143","subject":"Social Dance","credit":1,"time":{"day":["Thu"],"start":["08:00"],"end":["10:00"]},"place":"Ed 1-301","teacher":"","sec":"450","addStart":[getTime("08:00")],"addEnd":[getTime("10:00")-1]},
			{"sc":"1","code":"01175163","subject":"Golf","credit":1,"time":{"day":["Fri"],"start":["8:00"],"end":["10:00"]},"place":"ED 1 floor","teacher":"","sec":"450","addStart":[getTime("08:00")],"addEnd":[getTime("10:00")-1]},
			{"sc":"1","code":"01200111","subject":"Weight Traning","credit":1,"time":{"day":["Thu"],"start":["8:00"],"end":["10:00"]},"place":"Sports","teacher":"","sec":"450","addStart":[getTime("08:00")],"addEnd":[getTime("10:00")-1]},

			{"sc":"2","code":"01200111","subject":"Communication Skill for Engineer","credit":3,"time":{"day":["Wed"],"start":["09:00"],"end":["12:00"]},"place":"17302","teacher":"","sec":"450","addStart":[getTime("09:00")],"addEnd":[getTime("12:00")-1]},
			{"sc":"2","code":"01200111","subject":"Communication Skill for Engineer","credit":3,"time":{"day":["Wed"],"start":["09:00"],"end":["12:00"]},"place":"17304","teacher":"","sec":"451","addStart":[getTime("09:00")],"addEnd":[getTime("12:00")-1]},
		

			//{"sc":"3","code":"01204111","subject":"Computer and Programming","credit":3,"time":{"day":["Mon"],"start":["17:00"],"end":["19:00"]},"place":"17302","teacher":"Siripon","sec":"450","addStart":[19],"addEnd":[22]},
			//{"sc":"3","code":"01204111","subject":"Computer and Programming","credit":3,"time":{"day":["Mon"],"start":["17:00"],"end":["19:00"]},"place":"17303","teacher":"Jitti","sec":"451","addStart":[19],"addEnd":[22]},

			//{"sc":"3","code":"01204111","subject":"Computer and Programming Lab","credit":0,"time":{"day":["Mon"],"start":["09:00"],"end":["12:00"]},"place":"E0401","teacher":"Siripon","sec":"450","addStart":[3],"addEnd":[8]},
			//{"sc":"3","code":"01204111","subject":"Computer and Programming Lab","credit":0,"time":{"day":["Wed"],"start":["16:00"],"end":["19:00"]},"place":"E0401","teacher":"Jitti","sec":"451","addStart":[17],"addEnd":[22]},

			{"sc":"4","code":"01219141","subject":"OOP","credit":3,"time":{"day":["Mon"],"start":["10:00"],"end":["12:00"]},"place":"E507","teacher":"Supaporn","sec":"450","addStart":[getTime("10:00")],"addEnd":[getTime("12:00")-1]},

			{"sc":"4","code":"01219141","subject":"OOP Lab","credit":0,"time":{"day":["Tue"],"start":["09:00"],"end":["12:00"]},"place":"E603","teacher":"Supaporn","sec":"450","addStart":[getTime("09:00")],"addEnd":[getTime("12:00")-1]},
			
			{"sc":"4","code":"01204211","subject":"Discrete Math","credit":3,"time":{"day":["Thu"],"start":["09:00"],"end":["12:00"]},"place":"E204","teacher":"Thanawin","sec":"450","addStart":[getTime("09:00")],"addEnd":[getTime("12:00")-1]},
			{"sc":"4","code":"01204212","subject":"ADT","credit":3,"time":{"day":["Wed"],"start":["09:00"],"end":["12:00"]},"place":"E203","teacher":"Parut","sec":"450","addStart":[getTime("09:00")],"addEnd":[getTime("12:00")-1]},
			{"sc":"4","code":"01204214","subject":"Prog. Skill","credit":1,"time":{"day":["Tue"],"start":["09:00"],"end":["12:00"]},"place":"E201","teacher":"Phunpiti","sec":"450","addStart":[getTime("09:00")],"addEnd":[getTime("12:00")-1]},
			{"sc":"4","code":"01219243","subject":"SW Spec","credit":3,"time":{"day":["Mon"],"start":["09:00"],"end":["12:00"]},"place":"","teacher":"James","sec":"450","addStart":[getTime("09:00")],"addEnd":[getTime("12:00")-1]},
			{"sc":"4","code":"01219244","subject":"SW Spec Lab","credit":1,"time":{"day":["Wed"],"start":["13:00"],"end":["16:00"]},"place":"E201","teacher":"James","sec":"450","addStart":[getTime("13:00")],"addEnd":[getTime("16:00")-1]},
			
			
			{"sc":"4","code":"01205211","subject":"Electric Circuit Analysis I ","credit":3,"time":{"day":["Wed"],"start":["09:00"],"end":["12:00"]},"place":"17401","teacher":"","sec":"450","addStart":[getTime("09:00")],"addEnd":[getTime("12:00")-1]},
			{"sc":"4","code":"01208281","subject":"Workshop Practice","credit":1,"time":{"day":["Wed"],"start":["13:00"],"end":["16:00"]},"place":"","teacher":"17302","sec":"450","addStart":[getTime("13:00")],"addEnd":[getTime("16:00")-1]},
			{"sc":"4","code":"01208221","subject":"Engineering Mechanics I","credit":3,"time":{"day":["Mon"],"start":["09:00"],"end":["12:00"]},"place":"17303","teacher":"","sec":"450","addStart":[getTime("09:00")],"addEnd":[getTime("12:00")-1]},
			{"sc":"4","code":"01208221","subject":"Engineering Mechanics I","credit":3,"time":{"day":["Mon"],"start":["09:00"],"end":["12:00"]},"place":"17402","teacher":"","sec":"451","addStart":[getTime("09:00")],"addEnd":[getTime("12:00")-1]},
			{"sc":"4","code":"01208241","subject":"Thermodynamics I","credit":3,"time":{"day":["Tue","Thu"],"start":["14:30","14:30"],"end":["16:00","16:00"]},"place":"17304","teacher":"","sec":"450","addStart":[getTime("14:30"),getTime("14:30")],"addEnd":[getTime("16:00")-1,getTime("16:00")-1]},
						

			//{"sc":"5","code":"01403117","subject":"Fundamentals Chemistry","credit":3,"time":{"day":["Wed","Thu"],"start":["08:30","08:30"],"end":["10:30","10:30"]},"place":"17201","teacher":"","sec":"450","addStart":[2,2],"addEnd":[5,5]},
			//{"sc":"5","code":"01403117","subject":"Fundamentals Chemistry","credit":3,"time":{"day":["Wed","Thu"],"start":["08:30","08:30"],"end":["10:30","10:30"]},"place":"17302","teacher":"","sec":"451","addStart":[2,2],"addEnd":[5,5]},
			//{"sc":"5","code":"01403117","subject":"Fundamentals Chemistry","credit":3,"time":{"day":["Wed","Thu"],"start":["08:30","08:30"],"end":["10:30","10:30"]},"place":"17304","teacher":"","sec":"452","addStart":[2,2],"addEnd":[5,5]},
			

			//{"sc":"6","code":"01403114","subject":"Fundamentals Chemistry Laboratory","credit":1,"time":{"day":["Tue"],"start":["16:30"],"end":["19:30"]},"place":"","teacher":"","sec":"450","addStart":[18],"addEnd":[21]},
			//{"sc":"6","code":"01403114","subject":"Fundamentals Chemistry Laboratory","credit":1,"time":{"day":["Tue"],"start":["16:30"],"end":["19:30"]},"place":"","teacher":"","sec":"451","addStart":[18],"addEnd":[21]},
			//{"sc":"6","code":"01403114","subject":"Fundamentals Chemistry Laboratory","credit":1,"time":{"day":["Thu"],"start":["17:00"],"end":["20:00"]},"place":"","teacher":"","sec":"452","addStart":[19],"addEnd":[22]},
			//{"sc":"6","code":"01403114","subject":"Fundamentals Chemistry Laboratory","credit":1,"time":{"day":["Thu"],"start":["17:00"],"end":["20:00"]},"place":"","teacher":"","sec":"453","addStart":[19],"addEnd":[22]},
			//{"sc":"6","code":"01403114","subject":"Fundamentals Chemistry Laboratory","credit":1,"time":{"day":["Thu"],"start":["17:00"],"end":["20:00"]},"place":"","teacher":"","sec":"454","addStart":[19],"addEnd":[22]},
			//{"sc":"6","code":"01403114","subject":"Fundamentals Chemistry Laboratory","credit":1,"time":{"day":["Thu"],"start":["17:00"],"end":["20:00"]},"place":"","teacher":"","sec":"455","addStart":[19],"addEnd":[22]},

			{"sc":"7","code":"01420111","subject":"General Physic I","credit":3,"time":{"day":["Mon","Wed"],"start":["15:00","15:00"],"end":["16:30","16:30"]},"place":"17201","teacher":"","sec":"450","addStart":[getTime("15:00"),getTime("15:00")],"addEnd":[getTime("16:30")-1,getTime("16:30")-1]},
			{"sc":"7","code":"01420111","subject":"General Physic I","credit":3,"time":{"day":["Mon","Wed"],"start":["15:00","15:00"],"end":["16:30","16:30"]},"place":"17304","teacher":"","sec":"451","addStart":[getTime("15:00"),getTime("15:00")],"addEnd":[getTime("16:30")-1,getTime("16:30")-1]},
			{"sc":"7","code":"01420111","subject":"General Physic I","credit":3,"time":{"day":["Mon","Wed"],"start":["15:00","15:00"],"end":["16:30","16:30"]},"place":"17401","teacher":"","sec":"452","addStart":[getTime("15:00"),getTime("15:00")],"addEnd":[getTime("16:30")-1,getTime("16:30")-1]},

			//{"sc":"8","code":"01420112","subject":"General Physic II","credit":3,"time":{"day":["Mon","Thu"],"start":["15:00","15:00"],"end":["16:30","16:30"]},"place":"17201","teacher":"Khunrapan","sec":"450","addStart":[15,15],"addEnd":[17,17]},
			//{"sc":"8","code":"01420112","subject":"General Physic II","credit":3,"time":{"day":["Mon","Thu"],"start":["15:00","15:00"],"end":["16:30","16:30"]},"place":"17303","teacher":"Chatchawan","sec":"451","addStart":[15,15],"addEnd":[17,17]},

			//{"sc":"9","code":"01420114","subject":"Lab General Physic II","credit":1,"time":{"day":["Mon"],"start":["17:00"],"end":["20:00"]},"place":"","teacher":"Reanu","sec":"450","addStart":[19],"addEnd":[24]},
			//{"sc":"9","code":"01420114","subject":"Lab General Physic II","credit":1,"time":{"day":["Mon"],"start":["17:00"],"end":["20:00"]},"place":"","teacher":"Nopparet","sec":"451","addStart":[19],"addEnd":[24]},
			//{"sc":"9","code":"01420114","subject":"Lab General Physic II","credit":1,"time":{"day":["Tue"],"start":["13:00"],"end":["16:00"]},"place":"","teacher":"Reanu","sec":"452","addStart":[11],"addEnd":[16]},
			//{"sc":"9","code":"01420114","subject":"Lab General Physic II","credit":1,"time":{"day":["Tue"],"start":["13:00"],"end":["16:00"]},"place":"","teacher":"Khunrapan","sec":"453","addStart":[11],"addEnd":[16]},
			//{"sc":"9","code":"01420114","subject":"Lab General Physic II","credit":1,"time":{"day":["Thu"],"start":["17:00"],"end":["20:00"]},"place":"","teacher":"Akkachai","sec":"454","addStart":[19],"addEnd":[24]},
			//{"sc":"9","code":"01420114","subject":"Lab General Physic II","credit":1,"time":{"day":["Thu"],"start":["17:00"],"end":["20:00"]},"place":"","teacher":"Surasak","sec":"455","addStart":[19],"addEnd":[24]},


			{"sc":"10","code":"01417167","subject":"Engineering Mathematics I","credit":3,"time":{"day":["Wed","Fri"],"start":["13:00","10:00"],"end":["15:00","12:00"]},"place":"17304","teacher":"","sec":"450","addStart":[getTime("13:00"),getTime("10:00")],"addEnd":[getTime("15:00")-1,getTime("12:00")-1]},
			{"sc":"10","code":"01417167","subject":"Engineering Mathematics I","credit":3,"time":{"day":["Wed","Fri"],"start":["13:00","10:00"],"end":["15:00","12:00"]},"place":"17401","teacher":"","sec":"451","addStart":[getTime("13:00"),getTime("10:00")],"addEnd":[getTime("15:00")-1,getTime("12:00")-1]},
			{"sc":"10","code":"01417167","subject":"Engineering Mathematics I","credit":3,"time":{"day":["Wed","Fri"],"start":["13:00","10:00"],"end":["15:00","12:00"]},"place":"17402","teacher":"","sec":"452","addStart":[getTime("13:00"),getTime("10:00")],"addEnd":[getTime("15:00")-1,getTime("12:00")-1]},

			//{"sc":"10","code":"01417168","subject":"Engineering Mathematics II","credit":3,"time":{"day":["Wed","Fri"],"start":["10:30","15:00"],"end":["12:30","17:00"]},"place":"17201","teacher":"","sec":"450","addStart":[6,15],"addEnd":[9,18]},
			//{"sc":"10","code":"01417168","subject":"Engineering Mathematics II","credit":3,"time":{"day":["Wed","Fri"],"start":["10:30","15:00"],"end":["12:30","17:00"]},"place":"17303","teacher":"","sec":"451","addStart":[6,15],"addEnd":[9,18]},

			{"sc":"10","code":"01417267","subject":"Engineering Mathematics III","credit":3,"time":{"day":["Mon","Fri"],"start":["15:00","15:00"],"end":["16:30","16:30"]},"place":"17303","teacher":"","sec":"450","addStart":[getTime("15:00"),getTime("15:00")],"addEnd":[getTime("16:30")-1,getTime("16:30")-1]},
			{"sc":"10","code":"01417267","subject":"Engineering Mathematics III","credit":3,"time":{"day":["Mon","Fri"],"start":["15:00","15:00"],"end":["16:30","16:30"]},"place":"17402","teacher":"","sec":"451","addStart":[getTime("15:00"),getTime("15:00")],"addEnd":[getTime("16:30")-1,getTime("16:30")-1]},



			{"sc":"11","code":"01999032","subject":"Thai Studies","credit":3,"time":{"day":["Mon"],"start":["13:00"],"end":["16:00"]},"place":"17303","teacher":"","sec":"450","addStart":[getTime("13:00")],"addEnd":[getTime("16:00")-1]},
			{"sc":"11","code":"01999141","subject":"Man & Society","credit":3,"time":{"day":["Fri"],"start":["09:00"],"end":["12:00"]},"place":"17302","teacher":"","sec":"450","addStart":[getTime("09:00")],"addEnd":[getTime("12:00")-1]},
			{"sc":"11","code":"01999213","subject":"Environment, Technology & Life","credit":3,"time":{"day":["Fri"],"start":["09:00"],"end":["12:00"]},"place":"17401","teacher":"","sec":"450","addStart":[getTime("13:00")],"addEnd":[getTime("16:00")-1]},
			//{"sc":"11","code":"01453101","subject":"Introduction to Law","credit":3,"time":{"day":["Wed"],"start":["13:00"],"end":["16:00"]},"place":"17303","teacher":"","sec":"450","addStart":[11],"addEnd":[16]},

			{"sc":"12","code":"01208111","subject":"Engineering Drawing","credit":3,"time":{"day":["Tue","Tue"],"start":["13:00","15:00"],"end":["15:00","18:00"]},"place":"17401","teacher":"","sec":"450","addStart":[getTime("13:00"),getTime("15:00")],"addEnd":[getTime("15:00")-1,getTime("18:00")-1]},	
			{"sc":"12","code":"01208111","subject":"Engineering Drawing","credit":3,"time":{"day":["Tue","Tue"],"start":["13:00","15:00"],"end":["15:00","18:00"]},"place":"17402","teacher":"","sec":"451","addStart":[getTime("13:00"),getTime("15:00")],"addEnd":[getTime("15:00")-1,getTime("18:00")-1]},
			{"sc":"12","code":"01208111","subject":"Engineering Drawing","credit":3,"time":{"day":["Tue","Tue"],"start":["13:00","15:00"],"end":["15:00","18:00"]},"place":"3402","teacher":"Arttaporn","sec":"452","addStart":[getTime("13:00"),getTime("15:00")],"addEnd":[getTime("15:00")-1,getTime("18:00")-1]},

			{"sc":"13","code":"01355112","subject":"Foundation English II","credit":3,"time":{"day":["Mon","Fri"],"start":["13:00","13:00"],"end":["14:30","14:30"]},"place":"","teacher":"","sec":"450","addStart":[getTime("13:00"),getTime("13:00")],"addEnd":[getTime("14:30")-1,getTime("14:30")-1]},
			{"sc":"13","code":"01355112","subject":"Foundation English II","credit":3,"time":{"day":["Mon","Fri"],"start":["13:00","13:00"],"end":["14:30","14:30"]},"place":"","teacher":"","sec":"451","addStart":[getTime("13:00"),getTime("13:00")],"addEnd":[getTime("14:30")-1,getTime("14:30")-1]},
			{"sc":"13","code":"01355112","subject":"Foundation English II","credit":3,"time":{"day":["Tue"],"start":["09:00"],"end":["12:00"]},"place":"","teacher":"","sec":"452","addStart":[getTime("09:00")],"addEnd":[getTime("12:00")-1]},
			{"sc":"13","code":"01355112","subject":"Foundation English II","credit":3,"time":{"day":["Mon","Fri"],"start":["13:00","13:00"],"end":["14:30","14:30"]},"place":"","teacher":"","sec":"453","addStart":[getTime("13:00"),getTime("13:00")],"addEnd":[getTime("14:30")-1,getTime("14:30")-1]},
			
			{"sc":"13","code":"01355113","subject":"Foundation English III","credit":3,"time":{"day":["Tue","The"],"start":["13:00","13:00"],"end":["14:30","14:30"]},"place":"","teacher":"","sec":"450","addStart":[11],"addEnd":[16]},

			//{"sc":"13","code":"01355113","subject":"Foundation English III","credit":3,"time":{"day":["Wed"],"start":["13:00"],"end":["16:00"]},"place":"LH4-704","teacher":"Bancha","sec":"452","addStart":[11],"addEnd":[16]},
			//{"sc":"13","code":"01355113","subject":"Foundation English III","credit":3,"time":{"day":["Wed"],"start":["13:00"],"end":["16:00"]},"place":"LH4-705","teacher":"Pongampai ","sec":"453","addStart":[11],"addEnd":[16]},
			
			{"sc":"13","code":"01355206","subject":"TechnicalEnglish","credit":3,"time":{"day":["Mon","Fri"],"start":["13:00","13:00"],"end":["14:30","14:30"]},"place":"","teacher":"","sec":"450","addStart":[getTime("13:00"),getTime("13:00")],"addEnd":[getTime("14:30"),getTime("14:30")]},
			{"sc":"13","code":"01355206","subject":"TechnicalEnglish","credit":3,"time":{"day":["Mon","Fri"],"start":["13:00","13:00"],"end":["14:30","14:30"]},"place":"","teacher":"","sec":"450","addStart":[getTime("13:00"),getTime("13:00")],"addEnd":[getTime("14:30"),getTime("14:30")]},
			{"sc":"13","code":"01355206","subject":"TechnicalEnglish","credit":3,"time":{"day":["Mon","Fri"],"start":["13:00","13:00"],"end":["14:30","14:30"]},"place":"","teacher":"","sec":"450","addStart":[getTime("13:00"),getTime("13:00")],"addEnd":[getTime("14:30"),getTime("14:30")]},
			
			];
							
							
							
							
							
