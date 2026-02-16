#Create a receipt
# Of items to sum->How many number
# Number you can create a function to sum them
# function that adds numbers
# 
# #

# def sum_receipt(a,b,c):
#     sum=a+b+c
#     print("sum is",sum)
#     return sum

def sum_receipt(*args):
     print(args)
     sum=0
     for n in args:
          print("n is",n)
          sum=sum+n
     print("Sum is",sum)
    
#Args  is denoted one *
#  its a tuple, like or list. of all arguments    
#sum_receipt(10,20,50)

#sum_receipt(5,3)

# if (condition): if conditon is tru or truthy if statment
# while (condtion):if its ture or ttutht contine executing

def main():
    prices_list=[]
     
    while True:
        user_input=input("Enter a price or type 'done' to end: ").lower()

        if user_input=='done':
               break
          
        try:
               price=float(user_input)
               prices_list.append(price)
        except Exception as e:
               print("Invalid input. Enter a number")
               #print(e)
        print(prices_list)
    sum_receipt(*prices_list)

main()