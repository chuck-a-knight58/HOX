import os

LBR = "{"
RBR = "}"
IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png']
directory_path = "gallery"

# Filter for only files
files_in_directory = []

# Get all entries (files and directories)
albums = os.listdir(directory_path)

for album in albums:

    if album.startswith('.'):
        continue

    title = album
    album_path = os.path.join(directory_path, album)

    files = os.listdir(album_path)
    files.sort()

    for file in files:

        fname, fext = os.path.splitext(file)
        if fext.lower() in IMAGE_EXTENSIONS:
            files_in_directory.append((os.path.join(album_path, file), title))

print("\t\tconst slides = [")
for item in files_in_directory:
    print(f'\t\t\t{LBR} img: "{item[0]}", text: "{item[1]}" {RBR},')
print("\t\t];")
