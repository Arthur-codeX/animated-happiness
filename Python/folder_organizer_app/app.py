
from user_folder import get_user_folder
from file_sys import list_folder_files,move_files
import os

#Android->Kotlin,Java,JS(react native)
#Android 16
#from android 8>above
#use all caps to create a constant
# some delete folder files. chmode->
# windows 
IMAGE=[".jpg",".jpeg",".png"]
MUSIC=[".mp3",".wav"]
PDF=[".pdf"]
ZIP=[".tar",".zip",".rar"]

#have settings propmted for each delete or not


def main():
    print("Welcome to folder organisation app")
    print("----------------------------------")
    working_folder=get_user_folder()
    items=list_folder_files(working_folder)
    prompt=input("For each file prompt before move. y or n: ").lower()

    if prompt=='y':
        prompt=True
    else:
        prompt=False
    ##one.pdf
    ##one and .pdf
    for item in items:
        #print a single file in the array
        #print("single item is",item)
        splitItem=os.path.splitext(item)
        #print("split item is",splitItem)
        #print("firs element",splitItem[0])
        #print("Second element",splitItem[1])
        extension=splitItem[1]
        
        folder_name="Other"

        if not extension:
            continue

        if extension in IMAGE:
            #print(f"for file {item} its an Image")
            folder_name="Image"
        elif extension in MUSIC:
            #print(f"for file {item} its an Music")
            folder_name="Music"
        elif extension in PDF:
            #print(f"for file {item} its an PDF")
            folder_name="Pdf"
        elif extension in ZIP:
            #print(f"for file {item} its  ZIP")
            folder_name="Zip"
        else:
            #print(f"for {item} its in others or uknown")
            folder_name="Other"
        
        #print("The folder type is",folder_name)
        
        move_files(filename=item,working_dir=working_folder,folder_name=folder_name,prompt=prompt)
        #move_files(working_folder,filename,folder_name)

main()