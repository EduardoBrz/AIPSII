a = float(input("Informe o valor do lado 'a': "))
c = float(input("Informe o valor do lado 'c': "))
bmen = float(input("Informe o valor da base menor: "))
bmai = float(input("Informe o valor da base maior: "))
h = float(input("Informe o valor da altura: "))

p = a + bmen + c + bmai
area = (( bmai + bmen ) / 2 ) * h
 
print(f"Perímetro do trapezio = {p}")
print(f"Área do trapezio = {area}")
