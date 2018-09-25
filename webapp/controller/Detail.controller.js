sap.ui.define([
	"com/delaware/bg/trac2018/controller/BaseController",
	"sap/ui/model/Filter", 
		"com/delaware/bg/trac2018/model/formatter"


], function (BaseController, Filter, formatter) {
	"use strict";

	return BaseController.extend("com.delaware.bg.trac2018.controller.Detail", {

		customerNumber: 0,
		formatter: formatter,
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.delaware.bg.trac2018.view.Detail
		 */
		onInit: function () {
			this.getRouter().getRoute("Detail").attachPatternMatched(this._onRoutingMatched, this);

		},

		_onRoutingMatched: function (oEvent) {
			var sCustomerNumber = oEvent.getParameter("arguments").customerNumber;
			console.log(sCustomerNumber);
			this.customerNumber = sCustomerNumber;
			var oModel = this.getModel("ordersModel");
			var that = this;
			var aFilters = [new Filter("customer", sap.ui.model.FilterOperator.EQ, sCustomerNumber)];

			oModel.read("/ZV_ZVT18_ORDERS_HVH", {
				filters: aFilters,
				success: function (oData) {
					console.log(oData);
					//this verwijst naar oModel ipv de controller vandaar de variable that 
					that.getModel("orders").setData(oData.results);
					console.log();
				},
				error: function (oError) {
					console.log(oError);
				},
			});
		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.delaware.bg.trac2018.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.delaware.bg.trac2018.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.delaware.bg.trac2018.view.Detail
		 */
		//	onExit: function() {
		//
		//	}
		onOrderPress: function (oEvent) {
			
		}
	});

});