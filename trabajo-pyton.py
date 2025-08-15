# Ejercicio 1: Convertir un número decimal a binario, octal y hexadecimal

decimal = int(input("Ingrese un número decimal: "))#pide un numero decimal

print(f"Binario: {bin(decimal)[2:]}")#convierte de decimal a binario
print(f"Octal: {oct(decimal)[2:]}")#convierte de decimal a octal
print(f"Hexadecimal: {hex(decimal)[2:].upper()}")#convierte de decimal a hexadecimal


# Ejercicio 2: Sumar dos números binarios y mostrar el resultado en decimal

bin1 = input("Ingrese el primer número binario: ")#pide un binario
bin2 = input("Ingrese el segundo número binario: ")#pide el otro binario
# Convertir binario a decimal
decimal1 = int(bin1, 2)# Convertir binario a decimal
decimal2 = int(bin2, 2)# Convertir binario a decimal
# Sumar y mostrar
resultado = decimal1 + decimal2#suma
print(f"Suma en decimal: {resultado}")#muestra la suma



# Ejercicio 3: Hexadecimal ↔ Binario

# Hexadecimal a binario
hex_num = input("Ingrese un número hexadecimal: ")
binario = bin(int(hex_num, 16))[2:]
print(f"{hex_num} en binario es: {binario}")

# Binario a hexadecimal
bin_num = input("Ingrese un número binario: ")
hexadecimal = hex(int(bin_num, 2))[2:].upper()
print(f"{bin_num} en hexadecimal es: {hexadecimal}")



# Ejercicio 4: Operaciones aritméticas en binario

bin1 = input("Ingrese el primer número binario: ")
bin2 = input("Ingrese el segundo número binario: ")

dec1 = int(bin1, 2)
dec2 = int(bin2, 2)

suma = dec1 + dec2
resta = dec1 - dec2
multi = dec1 * dec2
division = dec1 / dec2 if dec2 != 0 else "División por cero"

print(f"Suma en binario: {bin(suma)[2:]}")
print(f"Resta en binario: {bin(resta)[2:] if resta >= 0 else '-'+bin(abs(resta))[2:]}")
print(f"Multiplicación en binario: {bin(multi)[2:]}")
print(f"División en binario: {bin(int(division))[2:] if isinstance(division, float) else division}")


# Ejercicio 5: Tabla de multiplicar con while

numero = int(input("Ingrese un número para su tabla de multiplicar: "))
contador = 1# comiensa a multiplicar con 1

while contador <= 10:#pones a donde tiene que llegar
    print(f"{numero} x {contador} = {numero * contador}")#te sale la multiplicacion y el resultado
    contador += 1# despues de terminar suma uno hasta su meta



# Ejercicio 6: Suma de números pares entre 1 y 50

suma_pares = 0
for i in range(1, 51):
    if i % 2 == 0:
        suma_pares += i

print(f"La suma de los números pares entre 1 y 50 es: {suma_pares}")



# Ejercicio 7: Suma de números primos entre 1 y 100

def es_primo(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

suma_primos = sum(i for i in range(1, 101) if es_primo(i))
print(f"La suma de los números primos entre 1 y 100 es: {suma_primos}")
