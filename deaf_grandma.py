from urllib import response
import re

def deaf_grandma():

    goodbyes = 0
    response = input("HEY KID!\n")

    while goodbyes != 2:

        if response == "GOODBYE!":
            goodbyes+=1
            if goodbyes == 1:
                response = input("LEAVING SO SOON?\n")
        elif response == "":
            response= input("WHAT?!\n")
        elif(re.search("[a-z]",response)!=None):
            response= input("SPEAK UP, KID!\n")
        else:
            response = input("NO, NOT SINCE 1946!\n")    
    
    print("LATER SKATER!")

deaf_grandma()
