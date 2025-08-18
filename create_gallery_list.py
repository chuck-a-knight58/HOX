import os

LBR = "{"
RBR = "}"
IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png']
directory_path = "gallery"

# Get all entries (files and directories)
all_entries = os.listdir(directory_path)

# Filter for only files
files_in_directory = []
for entry in all_entries:
    full_path = os.path.join(directory_path, entry)
    if os.path.isfile(full_path):
        fname, fext = os.path.splitext(full_path)
        if fext.lower() in IMAGE_EXTENSIONS:
            files_in_directory.append((entry, fext))

print("\t\tconst slides = [")
for item in files_in_directory:
    image_text = ""
    image_file_name = os.path.join(directory_path, item[0])
    text_file_name = os.path.join(directory_path, item[0].replace(item[1], ".txt"))
    if os.path.exists(text_file_name):
        with open(text_file_name, "r") as f:
            image_text = f.read()
    print(f'\t\t\t{LBR} img: "{image_file_name}", text: "{image_text}" {RBR},')
print("\t\t];")



"""
    const slides = [
        { img: "gallery/SpringIntensive2025HighProtocol-01.jpg", text: "gallery/SpringIntensive2025HighProtocol-01.jpg description." },
        { img: "gallery/SpringIntensive2025HighProtocol-02.jpg", text: "gallery/SpringIntensive2025HighProtocol-02.jpg description." },
        { img: "gallery/SpringIntensive2025HighProtocol-03.jpg", text: "gallery/SpringIntensive2025HighProtocol-03.jpg description." },
        { img: "gallery/SpringIntensive2025HighProtocol-04.jpg", text: "gallery/SpringIntensive2025HighProtocol-04.jpg description." },
        { img: "gallery/SpringIntensive2025HighProtocol-05.jpg", text: "gallery/SpringIntensive2025HighProtocol-05.jpg description." },
    ];
"""