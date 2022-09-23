#!/bin/bash

numeroCarpetas=$1

for val in $(seq 1 $numeroCarpeta 14) 
do
	mkdir Ejercicio$val
done
