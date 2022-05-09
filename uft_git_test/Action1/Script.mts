SystemUtil.Run("C:\Users\Prem.Padayachi\Downloads\UFT_One_2021_R1_DVD\Unified Functional Testing\MSI\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe")
wait(5)

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "JOHN" @@ hightlight id_;_2003464864_;_script infofile_;_ZIP::ssf39.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "62793d223940aca63fb8"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2003466832_;_script infofile_;_ZIP::ssf23.xml_;_
wait(2)


WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_2125452720_;_script infofile_;_ZIP::ssf58.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2136632472_;_script infofile_;_ZIP::ssf59.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 2,0 @@ hightlight id_;_2136634152_;_script infofile_;_ZIP::ssf60.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Click 832,481 @@ hightlight id_;_4851574_;_script infofile_;_ZIP::ssf61.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2124658408_;_script infofile_;_ZIP::ssf63.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "vishwa" @@ hightlight id_;_2136630600_;_script infofile_;_ZIP::ssf64.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2124657688_;_script infofile_;_ZIP::ssf65.xml_;_

wait(2)
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click @@ hightlight id_;_2101439680_;_script infofile_;_ZIP::ssf31.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2101440592_;_script infofile_;_ZIP::ssf32.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 4,0 @@ hightlight id_;_2101440736_;_script infofile_;_ZIP::ssf33.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2003469952_;_script infofile_;_ZIP::ssf34.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "Rishab" @@ hightlight id_;_2101443232_;_script infofile_;_ZIP::ssf36.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2003468176_;_script infofile_;_ZIP::ssf37.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_3673312_;_script infofile_;_ZIP::ssf38.xml_;_
