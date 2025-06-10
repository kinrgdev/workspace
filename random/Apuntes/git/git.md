# - ------------------- Instalar Git -----------------------------:

- Descargarlo: https://git-scm.com/downloads/win
- Instalar
  git --version

# - ------------------- Instalar GitCli -----------------------------:

- En Powershell o CMD:
  winget install --id GitHub.cli
- Marcar Y
- Copiar path del archivo
- Abrir el menú de Variables de Entorno:
- Presiona Win + R, escribe sysdm.cpl y pulsa Enter.
- Ve a la pestaña Opciones avanzadas y haz clic en Variables de entorno.
- Editar la variable Path:
- En la sección Variables del sistema, busca Path y haz clic en Editar.
- Pulsa Nuevo y añade la ruta donde está instalado gh.
- Pulsa Aceptar en todas las ventanas.
- Cierra y vuelve a abrir PowerShell o CMD

gh --version

# - ------------------- Loguearse -----------------------------:

gh auth login

- elegir la opción

git config --global user.name "nombre de usuario"
git config --global user.email "email"

- O a través de la interfaz de VSCODE en Accounts

- Verificar:
  git config --global --list

# ------------------- Crear repositorio en Github desde Terminal -----------------------------:

gh repo create nombreDelRepositorio --public --source=. --push --add-readme

ó

gh repo create nombreDelRepositorio --private --source=. --push --add-readme


(Se inicializa sola)

# ------------------- Carpeta local a repositorio Git -----------------------------:

- Cambiar a la rama main:

git branch -m master main

- Se crea la carpeta, se abre en VSCODE:

git init

# (o cualquier otro archivo se que quiera agregar)
git add .
# saldrán muchos warning si hay archivos
echo "# learnspace" > README.md
git commit -m "Primer commit"
git pull origin main

# (debe coincidir repositorio y enlace)

git push -u origin main

# Sí hay cambios externos como en la web de GitHub u otro usuario en VSCODE:

git pull origin main

# Después (para actualizar el local):

git push origin main

# ------------------- Clonar repositorio -----------------------------:

- Navegamos hasta la carpeta donde queremos o con la nativa de Clonar de VSCODE.
- Copiamos la url del repositorio de GitHub.
- Escribimos: git clone https://...
- Navegar a la carpeta:
  cd Repositorio
  git status
  git add .

# git add archivo_resuelto.txt

# git commit -m "Conflictos resueltos"

git commit -m "descripción del commit"
git pull origin main
git push origin main

- Subir cambios: git push origin [nombre de la rama]
- Obtener las últimas actualizaciones del repositorio: git pull origin [nombre de la rama]

# ---------------- Descargar los cambios si el remoto tiene cambios que el equipo local no tiene --------------------------:

# (Updates were rejected because the remote contains work that you do not have locally)

git pull origin main --rebase

# Si Git detecta conflictos, revisa los archivos afectados, edítalos manualmente y luego ejecuta:

git add .
git rebase --continue

- Empujar cambios

git push origin main

- Y sino (sobreescribe los cambios remotos)

git push origin main --force

 # ---------------- Miscelanea --------------------------:

* Confirmar rama
git branch

* Confirmar repositorio
git remote -v

* Si no se está en main (o en otra)
git checkout main

* Forzar sincronización

git fetch --all
git reset --hard origin/main
git clean -df
