export const TERMINAL_DATA = {
  category: "Terminal Mastery (Unix/Linux)",
  icon: "💻",
  items: [
    {
      name: "Navigation & Discovery",
      description: "Commands to move around the file system and figure out where you are and what is there.",
      behindTheScenes: "The operating system maintains a 'current working directory' for every process. These commands interact with the kernel's file system API to list nodes and change process state.",
      code: `# Print Working Directory (where am I?)
pwd

# Change Directory (move to a folder)
cd /path/to/folder
cd ..    # Move up one level
cd ~     # Move to home directory
cd -     # Move to previous directory

# List directory contents
ls
ls -la   # List all (including hidden) with detailed info`
    },
    {
      name: "File & Directory Manipulation",
      description: "Commands to create, move, copy, and destroy files.",
      behindTheScenes: "When you 'delete' a file with rm, the OS doesn't erase the disk sectors. It simply removes the pointer (the inode link) to the data, marking that space as free to be overwritten.",
      code: `# Make a Directory
mkdir new_folder

# Create an empty file (or update its modification timestamp)
touch newfile.txt

# Copy a file or directory
cp source.txt dest.txt
cp -r source_folder dest_folder

# Move or Rename a file
mv oldname.txt newname.txt

# Remove (Delete) a file or directory
rm unwanted.txt
rm -rf folder_to_delete # Force delete recursively (dangerous!)`
    },
    {
      name: "Viewing File Contents",
      description: "Quickly look at what's inside a file without opening a heavy text editor.",
      behindTheScenes: "These commands stream the file contents to the 'standard output' (stdout). Less is specifically a 'pager' that buffers the file, allowing you to read massive files (like gigabyte log files) without crashing your terminal.",
      code: `# Concatenate and print the entire file
cat script.js

# View file page-by-page (scrollable)
less massive_log.txt

# Print the first 10 lines
head -n 10 file.txt

# Print the last 10 lines (great for seeing recent log errors)
tail -n 10 file.txt
tail -f file.txt # Follow the file in real-time as it updates`
    },
    {
      name: "Searching (grep & find)",
      description: "Finding files on the system or finding text inside those files.",
      behindTheScenes: "Grep uses highly optimized string matching algorithms (like Boyer-Moore) to rip through megabytes of text instantly. Find traverses the file system tree checking metadata (inodes) against your criteria.",
      code: `# Global Regular Expression Print (Find text in files)
grep "error" server.log
grep -r "function init" ./src  # Search recursively in a directory
grep -i "hello" file.txt       # Case-insensitive search

# Find files by name
find . -name "*.js"

# Find files modified in the last 7 days
find . -mtime -7`
    },
    {
      name: "Piping and Redirection",
      description: "The true power of Unix comes from stringing simple programs together. Redirection sends output to a file. Piping sends output to another program.",
      behindTheScenes: "The shell connects the 'standard output' (stdout) of the first program to the 'standard input' (stdin) of the second program via an inter-process communication buffer called a pipe.",
      code: `# Redirect output to a file (overwrites)
echo "Hello World" > hello.txt

# Append output to a file
echo "More text" >> hello.txt

# Pipe (|): Send output of 'ls' into 'grep'
ls -la | grep "Aug 15"`
    },
    {
      name: "Permissions (chmod & chown)",
      description: "Manage who can read, write, or execute a file. Unix permissions are broken down by User, Group, and Others.",
      behindTheScenes: "Permissions are represented as a 3-digit octal number (e.g., 755). 4 = Read, 2 = Write, 1 = Execute. 7 means Read+Write+Execute (4+2+1).",
      code: `# Give the owner full permissions, and others read/execute (755)
chmod 755 script.sh

# Make a file executable
chmod +x script.sh

# Change ownership of a file to user 'admin'
chown admin config.json`
    }
  ]
};
