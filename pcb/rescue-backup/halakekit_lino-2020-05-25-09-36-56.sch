EESchema Schematic File Version 2
LIBS:halakekit_lino-rescue
LIBS:power
LIBS:device
LIBS:transistors
LIBS:conn
LIBS:linear
LIBS:regul
LIBS:74xx
LIBS:cmos4000
LIBS:adc-dac
LIBS:memory
LIBS:xilinx
LIBS:microcontrollers
LIBS:dsp
LIBS:microchip
LIBS:analog_switches
LIBS:motorola
LIBS:texas
LIBS:intel
LIBS:audio
LIBS:interface
LIBS:digital-audio
LIBS:philips
LIBS:display
LIBS:cypress
LIBS:siliconi
LIBS:opto
LIBS:atmel
LIBS:contrib
LIBS:valves
LIBS:w_connectors
LIBS:MDBT40
LIBS:rtf015n03
LIBS:njm2870
LIBS:halakekit_lino-cache
EELAYER 25 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title "HaLakeKit Lino"
Date "2017-01-07"
Rev "3.0"
Comp "Nyampass.co.ltd"
Comment1 "http://nyampass.com"
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L Battery BT1
U 1 1 583FB68C
P 7950 4900
F 0 "BT1" H 8050 4950 50  0000 L CNN
F 1 "Battery" H 8050 4850 50  0000 L CNN
F 2 "CR2032_frame:BAT-HLD-001-TRCT" V 7950 4940 50  0001 C CNN
F 3 "" V 7950 4940 50  0000 C CNN
	1    7950 4900
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR01
U 1 1 583FB738
P 7950 5050
F 0 "#PWR01" H 7950 4800 50  0001 C CNN
F 1 "GND" H 7950 4900 50  0000 C CNN
F 2 "" H 7950 5050 50  0000 C CNN
F 3 "" H 7950 5050 50  0000 C CNN
	1    7950 5050
	1    0    0    -1  
$EndComp
Text GLabel 8500 3150 0    39   Input ~ 0
SWDCLK
Text GLabel 8500 3250 0    39   Input ~ 0
SWDIO
Text GLabel 8500 3850 0    39   Input ~ 0
P2
Text GLabel 8500 3950 0    39   Input ~ 0
P3
Text GLabel 8500 4050 0    39   Input ~ 0
P4_Drain
$Comp
L GND #PWR02
U 1 1 583FB9E0
P 6800 2800
F 0 "#PWR02" H 6800 2550 50  0001 C CNN
F 1 "GND" H 6800 2650 50  0000 C CNN
F 2 "" H 6800 2800 50  0000 C CNN
F 3 "" H 6800 2800 50  0000 C CNN
	1    6800 2800
	1    0    0    -1  
$EndComp
$Comp
L HEADER_10 J1
U 1 1 58611085
P 8600 3600
F 0 "J1" H 8600 4150 60  0000 C CNN
F 1 "HEADER_10" H 8600 3050 60  0000 C CNN
F 2 "simple_headers:Pin_Header_Straight_1x10" H 8600 3600 60  0001 C CNN
F 3 "" H 8600 3600 60  0000 C CNN
	1    8600 3600
	1    0    0    -1  
$EndComp
Text GLabel 8500 3650 0    39   Input ~ 0
VCC
Text GLabel 8500 3350 0    39   Input ~ 0
P0
Text GLabel 8500 3450 0    39   Input ~ 0
P1
$Comp
L MDBT40 U1
U 1 1 587049AE
P 5650 3700
F 0 "U1" H 4950 4750 40  0000 C CNN
F 1 "MDBT40" H 5650 3700 40  0000 C CNN
F 2 "MDBT40:MDBT40" H 5300 3950 40  0001 C CNN
F 3 "" H 5400 4050 40  0000 C CNN
	1    5650 3700
	1    0    0    -1  
$EndComp
Text GLabel 6500 3400 2    39   Input ~ 0
SWDCLK
Text GLabel 6500 3500 2    39   Input ~ 0
SWDIO
$Comp
L GND #PWR03
U 1 1 58704D79
P 6250 4950
F 0 "#PWR03" H 6250 4700 50  0001 C CNN
F 1 "GND" H 6250 4800 50  0000 C CNN
F 2 "" H 6250 4950 50  0000 C CNN
F 3 "" H 6250 4950 50  0000 C CNN
	1    6250 4950
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR04
U 1 1 58704DEC
P 8200 3550
F 0 "#PWR04" H 8200 3300 50  0001 C CNN
F 1 "GND" H 8200 3400 50  0000 C CNN
F 2 "" H 8200 3550 50  0000 C CNN
F 3 "" H 8200 3550 50  0000 C CNN
	1    8200 3550
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR05
U 1 1 58704E1C
P 5050 4950
F 0 "#PWR05" H 5050 4700 50  0001 C CNN
F 1 "GND" H 5050 4800 50  0000 C CNN
F 2 "" H 5050 4950 50  0000 C CNN
F 3 "" H 5050 4950 50  0000 C CNN
	1    5050 4950
	1    0    0    -1  
$EndComp
NoConn ~ 5250 4800
NoConn ~ 6500 2900
Text GLabel 5450 4800 3    39   Input ~ 0
P0
Text GLabel 5550 4800 3    39   Input ~ 0
P1
Text GLabel 5650 4800 3    39   Input ~ 0
P2
Text GLabel 5750 4800 3    39   Input ~ 0
P3
$Comp
L Crystal Y1
U 1 1 5870519F
P 4000 4300
F 0 "Y1" H 4000 4450 50  0000 C CNN
F 1 "Crystal" H 4000 4150 50  0000 C CNN
F 2 "common:FC-135" H 4000 4300 50  0001 C CNN
F 3 "" H 4000 4300 50  0000 C CNN
	1    4000 4300
	0    -1   -1   0   
$EndComp
$Comp
L GND #PWR06
U 1 1 587051FD
P 4300 3200
F 0 "#PWR06" H 4300 2950 50  0001 C CNN
F 1 "GND" H 4300 3050 50  0000 C CNN
F 2 "" H 4300 3200 50  0000 C CNN
F 3 "" H 4300 3200 50  0000 C CNN
	1    4300 3200
	1    0    0    -1  
$EndComp
$Comp
L C C1
U 1 1 587053DF
P 3650 4100
F 0 "C1" H 3675 4200 50  0000 L CNN
F 1 "12pf" H 3675 4000 50  0000 L CNN
F 2 "register_and_condensor:C_0603" H 3688 3950 50  0001 C CNN
F 3 "" H 3650 4100 50  0000 C CNN
	1    3650 4100
	0    1    1    0   
$EndComp
$Comp
L C C2
U 1 1 5870542C
P 3650 4500
F 0 "C2" H 3675 4600 50  0000 L CNN
F 1 "12pf" H 3675 4400 50  0000 L CNN
F 2 "register_and_condensor:C_0603" H 3688 4350 50  0001 C CNN
F 3 "" H 3650 4500 50  0000 C CNN
	1    3650 4500
	0    1    1    0   
$EndComp
$Comp
L GND #PWR07
U 1 1 5870565D
P 3350 4550
F 0 "#PWR07" H 3350 4300 50  0001 C CNN
F 1 "GND" H 3350 4400 50  0000 C CNN
F 2 "" H 3350 4550 50  0000 C CNN
F 3 "" H 3350 4550 50  0000 C CNN
	1    3350 4550
	1    0    0    -1  
$EndComp
$Comp
L C C4
U 1 1 583F839F
P 7100 4900
F 0 "C4" H 7125 5000 50  0000 L CNN
F 1 "4.7uf1" H 7125 4800 50  0000 L CNN
F 2 "register_and_condensor:C_0603" H 7138 4750 50  0001 C CNN
F 3 "" H 7100 4900 50  0000 C CNN
	1    7100 4900
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR08
U 1 1 583F8380
P 7100 5050
F 0 "#PWR08" H 7100 4800 50  0001 C CNN
F 1 "GND" H 7100 4900 50  0000 C CNN
F 2 "" H 7100 5050 50  0000 C CNN
F 3 "" H 7100 5050 50  0000 C CNN
	1    7100 5050
	1    0    0    -1  
$EndComp
$Comp
L +3.3V #PWR09
U 1 1 58705CF1
P 7950 4750
F 0 "#PWR09" H 7950 4600 50  0001 C CNN
F 1 "+3.3V" H 7950 4890 50  0000 C CNN
F 2 "" H 7950 4750 50  0000 C CNN
F 3 "" H 7950 4750 50  0000 C CNN
	1    7950 4750
	1    0    0    -1  
$EndComp
$Comp
L +3.3V #PWR010
U 1 1 58705D11
P 7100 4750
F 0 "#PWR010" H 7100 4600 50  0001 C CNN
F 1 "+3.3V" H 7100 4890 50  0000 C CNN
F 2 "" H 7100 4750 50  0000 C CNN
F 3 "" H 7100 4750 50  0000 C CNN
	1    7100 4750
	1    0    0    -1  
$EndComp
$Comp
L +3.3V #PWR011
U 1 1 58705D56
P 4650 3500
F 0 "#PWR011" H 4650 3350 50  0001 C CNN
F 1 "+3.3V" H 4650 3640 50  0000 C CNN
F 2 "" H 4650 3500 50  0000 C CNN
F 3 "" H 4650 3500 50  0000 C CNN
	1    4650 3500
	1    0    0    -1  
$EndComp
$Comp
L +3.3V #PWR012
U 1 1 58705D76
P 5150 4950
F 0 "#PWR012" H 5150 4800 50  0001 C CNN
F 1 "+3.3V" H 5150 5090 50  0000 C CNN
F 2 "" H 5150 4950 50  0000 C CNN
F 3 "" H 5150 4950 50  0000 C CNN
	1    5150 4950
	0    1    1    0   
$EndComp
$Comp
L VCC #PWR013
U 1 1 58706220
P 9850 1400
F 0 "#PWR013" H 9850 1250 50  0001 C CNN
F 1 "VCC" H 9850 1550 50  0000 C CNN
F 2 "" H 9850 1400 50  0000 C CNN
F 3 "" H 9850 1400 50  0000 C CNN
	1    9850 1400
	1    0    0    -1  
$EndComp
$Comp
L +3.3V #PWR014
U 1 1 58706243
P 9850 2000
F 0 "#PWR014" H 9850 1850 50  0001 C CNN
F 1 "+3.3V" H 9850 2140 50  0000 C CNN
F 2 "" H 9850 2000 50  0000 C CNN
F 3 "" H 9850 2000 50  0000 C CNN
	1    9850 2000
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR015
U 1 1 58706278
P 8550 2350
F 0 "#PWR015" H 8550 2100 50  0001 C CNN
F 1 "GND" H 8550 2200 50  0000 C CNN
F 2 "" H 8550 2350 50  0000 C CNN
F 3 "" H 8550 2350 50  0000 C CNN
	1    8550 2350
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR016
U 1 1 58706541
P 7500 5050
F 0 "#PWR016" H 7500 4800 50  0001 C CNN
F 1 "GND" H 7500 4900 50  0000 C CNN
F 2 "" H 7500 5050 50  0000 C CNN
F 3 "" H 7500 5050 50  0000 C CNN
	1    7500 5050
	1    0    0    -1  
$EndComp
$Comp
L C C5
U 1 1 58706564
P 7500 4900
F 0 "C5" H 7525 5000 50  0000 L CNN
F 1 "0.1uf1" H 7525 4800 50  0000 L CNN
F 2 "register_and_condensor:C_0603" H 7538 4750 50  0001 C CNN
F 3 "" H 7500 4900 50  0000 C CNN
	1    7500 4900
	1    0    0    -1  
$EndComp
$Comp
L VCC #PWR017
U 1 1 587065B1
P 7500 4750
F 0 "#PWR017" H 7500 4600 50  0001 C CNN
F 1 "VCC" H 7500 4900 50  0000 C CNN
F 2 "" H 7500 4750 50  0000 C CNN
F 3 "" H 7500 4750 50  0000 C CNN
	1    7500 4750
	1    0    0    -1  
$EndComp
Text GLabel 5850 4800 3    39   Input ~ 0
P4
$Comp
L RTF015N03 U3
U 1 1 58732EB7
P 9900 5750
F 0 "U3" H 10050 6050 60  0000 C CNN
F 1 "RTF015N03" H 10050 5950 60  0000 C CNN
F 2 "mosfet:rtf015n03" H 9900 5750 60  0001 C CNN
F 3 "" H 9900 5750 60  0000 C CNN
	1    9900 5750
	1    0    0    -1  
$EndComp
$Comp
L NJM2870 U2
U 1 1 5873313F
P 9250 1900
F 0 "U2" H 9350 2200 39  0000 C CNN
F 1 "NJM2870" H 9350 2100 39  0000 C CNN
F 2 "common:SOT-23-5" H 9250 1900 39  0001 C CNN
F 3 "" H 9250 1900 39  0000 C CNN
	1    9250 1900
	1    0    0    -1  
$EndComp
$Comp
L R R1
U 1 1 58733303
P 8900 1650
F 0 "R1" V 8980 1650 50  0000 C CNN
F 1 "1K" V 8900 1650 50  0000 C CNN
F 2 "register_and_condensor:R_0603" V 8830 1650 50  0001 C CNN
F 3 "" H 8900 1650 50  0000 C CNN
	1    8900 1650
	1    0    0    -1  
$EndComp
$Comp
L C C3
U 1 1 58733521
P 8900 2150
F 0 "C3" H 8925 2250 50  0000 L CNN
F 1 "0.01uf" H 8925 2050 50  0000 L CNN
F 2 "register_and_condensor:C_0603" H 8938 2000 50  0001 C CNN
F 3 "" H 8900 2150 50  0000 C CNN
	1    8900 2150
	1    0    0    -1  
$EndComp
Text GLabel 10550 5700 2    39   Input ~ 0
P4_Drain
Text GLabel 9200 5500 0    39   Input ~ 0
P4
$Comp
L R R2
U 1 1 587338A8
P 9150 5650
F 0 "R2" V 9230 5650 50  0000 C CNN
F 1 "1K" V 9150 5650 50  0000 C CNN
F 2 "register_and_condensor:R_0603" V 9080 5650 50  0001 C CNN
F 3 "" H 9150 5650 50  0000 C CNN
	1    9150 5650
	0    1    1    0   
$EndComp
$Comp
L GND #PWR018
U 1 1 58733949
P 9000 5900
F 0 "#PWR018" H 9000 5650 50  0001 C CNN
F 1 "GND" H 9000 5750 50  0000 C CNN
F 2 "" H 9000 5900 50  0000 C CNN
F 3 "" H 9000 5900 50  0000 C CNN
	1    9000 5900
	1    0    0    -1  
$EndComp
Wire Wire Line
	6800 2800 6500 2800
Wire Wire Line
	6250 4800 6250 4950
Wire Wire Line
	5050 4800 5050 4950
Wire Wire Line
	4800 3000 4300 3000
Wire Wire Line
	4800 3100 4300 3100
Connection ~ 4300 3100
Wire Wire Line
	3800 4100 4800 4100
Wire Wire Line
	4000 4150 4000 4100
Connection ~ 4000 4100
Wire Wire Line
	4800 4200 4300 4200
Wire Wire Line
	4300 4200 4300 4500
Wire Wire Line
	4300 4500 3800 4500
Wire Wire Line
	4000 4450 4000 4500
Connection ~ 4000 4500
Wire Wire Line
	3350 4100 3350 4550
Wire Wire Line
	3350 4100 3500 4100
Wire Wire Line
	3500 4500 3350 4500
Connection ~ 3350 4500
Wire Wire Line
	4300 3000 4300 3200
Wire Wire Line
	4650 3500 4800 3500
Wire Wire Line
	5150 4800 5150 4950
Wire Wire Line
	8500 3550 8200 3550
Wire Wire Line
	8550 1900 8900 1900
Wire Wire Line
	9850 1400 9850 1800
Wire Wire Line
	8900 1500 9850 1500
Connection ~ 9850 1500
Wire Wire Line
	8550 1900 8550 2350
Wire Wire Line
	8550 2300 8900 2300
Connection ~ 8550 2300
Wire Wire Line
	9300 5650 9500 5650
Wire Wire Line
	9200 5500 9400 5500
Wire Wire Line
	9400 5500 9400 5650
Connection ~ 9400 5650
Wire Wire Line
	9000 5650 9000 5900
Wire Wire Line
	9500 5750 9000 5750
Connection ~ 9000 5750
$Comp
L +3.3V #PWR019
U 1 1 58705C84
P 8000 3750
F 0 "#PWR019" H 8000 3600 50  0001 C CNN
F 1 "+3.3V" H 8000 3890 50  0000 C CNN
F 2 "" H 8000 3750 50  0000 C CNN
F 3 "" H 8000 3750 50  0000 C CNN
	1    8000 3750
	1    0    0    -1  
$EndComp
Wire Wire Line
	8000 3750 8500 3750
NoConn ~ 4800 3600
NoConn ~ 4800 3700
NoConn ~ 4800 3800
NoConn ~ 4800 3900
NoConn ~ 4800 4000
NoConn ~ 4800 4300
NoConn ~ 4800 4400
NoConn ~ 5350 4800
NoConn ~ 6050 4800
NoConn ~ 5950 4800
NoConn ~ 6150 4800
NoConn ~ 6500 3600
NoConn ~ 6500 3700
NoConn ~ 6500 3800
NoConn ~ 6500 3900
NoConn ~ 6500 4000
NoConn ~ 6500 4100
NoConn ~ 6500 4200
NoConn ~ 6500 4300
NoConn ~ 6500 4400
NoConn ~ 6500 3000
NoConn ~ 6500 3100
NoConn ~ 6500 3200
NoConn ~ 6500 3300
$EndSCHEMATC
