
#check if its a valid folder
import os
import sys

#return exits a function: use the return
#sys.exit() exits whole program
#re

## use while loop,for loop
## use recussion to give someone 3 tries before exiting
## Extra.

##Quality Assurance Engineer

def get_user_folder():
    folder_path=input("Enter the folder path:")
    print(folder_path)
    isdir=os.path.isdir(folder_path)
    #is false-> not false-> true
    # is true-> not true-> false
    #isdir->datatype -> Boolean
    #
    if not isdir: 
        print("Invalid directory entered")
        sys.exit()
    #isdir will be true or false

    return folder_path
    #print it to see if its ok