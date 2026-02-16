import os
import shutil

#list all files
#input: path 
#output An array of files
def list_folder_files(folder_path):
    files=os.listdir(folder_path)
    #print(files)
    return files

# input working_dir,filename,folder_name
# mkey word 
#progress bar to show the files being moved extra
#
def move_files(working_dir,filename,folder_name,prompt=True):
    destination_path=os.path.join(working_dir,folder_name)
    #move 
    #destination_path exists
    #if it does not exist create it
    source=os.path.join(working_dir,filename)
    #print("Moving the file to",destination_path)

    isdir=os.path.isdir(destination_path)

    if not isdir:
        #create it first
        os.makedirs(destination_path)

    print(f"For file {filename}")
    print(f"Will be moved from {source}")
    print(f"to {destination_path}")
    
    if prompt:
        print("")
        print("Reply with following")
        print("y or Y for Yes:Move file")
        print("n or N for No:Dont Move File")
        to_move=input("Answer:").lower().strip()
        

        if to_move=="y":  
           shutil.move(src=source,dst=destination_path)
           return
        print("File not moved ",filename)
        return
    shutil.move(src=source,dst=destination_path)
    