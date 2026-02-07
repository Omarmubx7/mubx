
import os
from PIL import Image

def optimize_image(input_path, output_path, max_width=None, quality=85):
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (e.g. for PNG to WebP/JPEG)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGBA")
            
            # Resize if max_width is set and image is wider
            if max_width and img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                print(f"Resized {input_path} to {max_width}x{new_height}")
            
            # Save as WebP
            output_dir = os.path.dirname(output_path)
            if not os.path.exists(output_dir):
                os.makedirs(output_dir)
                
            img.save(output_path, "WEBP", quality=quality)
            
            # Calculate savings
            old_size = os.path.getsize(input_path)
            new_size = os.path.getsize(output_path)
            savings = (old_size - new_size) / old_size * 100
            print(f"Optimized: {input_path} -> {output_path} ({savings:.2f}% saved)")
            
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

def main():
    base_dir = r"c:\Users\omara\mubx\public"
    
    # Hero Image - prioritize quality but format change
    optimize_image(
        os.path.join(base_dir, "omarmub.png"),
        os.path.join(base_dir, "omarmub.webp"),
        max_width=1200, # Hero doesn't need to be massive usually 
        quality=90
    )
    
    # Project Images
    images_dir = os.path.join(base_dir, "images")
    if os.path.exists(images_dir):
        for filename in os.listdir(images_dir):
            if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
                input_path = os.path.join(images_dir, filename)
                output_filename = os.path.splitext(filename)[0] + ".webp"
                output_path = os.path.join(images_dir, output_filename)
                
                # Check directly if it's a logo (often smaller) vs screenshot
                if "logo" in filename.lower():
                     optimize_image(input_path, output_path, max_width=None, quality=90)
                else:
                    # Screenshots
                    optimize_image(input_path, output_path, max_width=1000, quality=85)

if __name__ == "__main__":
    main()
