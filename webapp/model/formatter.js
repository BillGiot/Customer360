sap.ui.define([
	"sap/ui/core/format/DateFormat"
	], function(DateFormat){
	"use strict"; 
	
	return{
		
		addLeadingZeroes: function(sValue){
			
			return "00" + sValue; 
		}, 
		formatDate: function(sValue){
			var dateFormat = DateFormat.getInstance();  
			var dateFormatted = dateFormat.format(sValue);
			return dateFormatted; 
		}
	}; 
	
	
}); 