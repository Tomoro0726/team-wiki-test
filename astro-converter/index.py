import re
from bs4 import BeautifulSoup
import os
import shutil  # 追加：shutilモジュールをインポート
from urllib.parse import unquote


def extract_paths(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')

    # Extract CSS paths
    css_paths = [link['href'] for link in soup.find_all(
        'link', rel='stylesheet') if 'href' in link.attrs]

    # Extract JS paths
    js_paths = [script['src']
                for script in soup.find_all('script') if 'src' in script.attrs]

    # Extract image paths
    img_paths = [img['src']
                 for img in soup.find_all('img') if 'src' in img.attrs]

    # Extract PDF paths
    pdf_paths = [a['href'] for a in soup.find_all(
        'a', href=True) if a['href'].endswith('.pdf')]

    return css_paths + js_paths + img_paths + pdf_paths


def main():
    dist_directory = 'dist'
    output_directory = 'output'
    base_url = 'https://cdn.example.com'

    all_content_paths = []

    # Iterate over all HTML files in the dist directory
    for root, _, files in os.walk(dist_directory):
        for file_name in files:
            if file_name.endswith('.html'):
                html_file_path = os.path.join(root, file_name)

                with open(html_file_path, 'r', encoding='utf-8') as file:
                    html_content = file.read()
                all_content_paths.extend(extract_paths(html_content))

    # IF dose not exist final directory, create it
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    # output directory should be empty
    for root, _, files in os.walk(output_directory):
        for file_name in files:
            os.remove(os.path.join(root, file_name))

    all_content_paths = list(set(all_content_paths))
    replace_content_paths = {}
    for i in range(len(all_content_paths)):
        ext = os.path.splitext(all_content_paths[i])[-1]
        replace_content_paths[all_content_paths[i]] = str(i)+ext
    print(replace_content_paths)

    # output directoryの中にcdnディレクトリを作成
    if not os.path.exists(output_directory+"/cdn"):
        os.makedirs(output_directory+"/cdn")

    # Copy all files to the output directory
    for i in range(len(all_content_paths)):
        # Pathの修正
        if all_content_paths[i].startswith('/'):
            src = "dist"+all_content_paths[i]
        else:
            src = "dist/"+all_content_paths[i]

        dst = os.path.join(output_directory, "cdn",
                           str(i)+os.path.splitext(src)[-1])

        # /publicを削除
        src = src.replace("/public", "")

        # URLデコードが必要な場合にはデコード
        src = unquote(src)

        # ファイルの存在確認
        if os.path.exists(src):
            shutil.copy(src, dst)
        else:
            print(src+" is not found.")
    # HTMLのコピーと変更
    for root, _, files in os.walk(dist_directory):
        for file_name in files:
            if file_name.endswith('.html'):
                html_file_path = os.path.join(root, file_name)
                with open(html_file_path, 'r', encoding='utf-8') as file:
                    html_content = file.read()
                for key, value in replace_content_paths.items():
                    html_content = html_content.replace(
                        key, base_url+"/"+value)
                with open(os.path.join(output_directory, file_name), 'w', encoding='utf-8') as file:
                    file.write(html_content)


if __name__ == "__main__":
    main()
