# 🧠 Chuleta Git + GitHub CLI + Flujo de Trabajo en VSCode

---

## 🛠️ 1. Instalación de Git

```bash
# Descargar e instalar desde:
https://git-scm.com/downloads

# Verificar instalación:
git --version
```

---

## ⚙️ 2. Instalación de GitHub CLI (gh)

```bash
winget install --id GitHub.cli
gh --version
```

> ⚠️ Si no funciona, añade la ruta a `gh.exe` en Variables de entorno > Path

---

## 🔐 3. Autenticación

```bash
gh auth login
# Sigue los pasos

git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Verificar:
git config --global --list
```

---

## 🆕 4. Crear repositorio en GitHub desde terminal

```bash
# Público
gh repo create nombreDelRepo --public --source=. --push --add-readme

# O privado
gh repo create nombreDelRepo --private --source=. --push --add-readme
```

---

## 📁 5. Crear repositorio local

```bash
git init
git branch -m master main  # Cambiar nombre de rama si es necesario

echo "# Título del proyecto" > README.md
git add .
git commit -m "Primer commit"

git remote add origin https://github.com/usuario/repositorio.git
git push -u origin main
```

---

## 🔄 6. Clonar un repositorio

```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

---

## ✍️ 7. Flujo de trabajo común

```bash
git status                  # Ver cambios
git add .                  # Añadir todos los archivos
git commit -m "Mensaje"
git pull origin main       # Traer cambios remotos
git push origin main       # Subir cambios
```

---

## ⚠️ 8. Si hay conflictos al hacer pull

```bash
git pull origin main --rebase
# Editar conflictos
git add .
git rebase --continue
git push origin main
```

---

## 🧨 9. Forzar sincronización (⚠️ borra cambios locales)

```bash
git fetch --all
git reset --hard origin/main
git clean -df
```

---

## 🧰 10. Comandos útiles

```bash
git branch         # Ver en qué rama estás
git checkout main  # Cambiar a otra rama
git remote -v      # Ver origen remoto
git log --oneline  # Historial compacto
```
