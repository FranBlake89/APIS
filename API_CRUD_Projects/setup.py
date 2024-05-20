from setuptools import find_packages, setup

setup(
    name = "CRUD API Projects",
    version = "0.0.1",
    description = "Simplify the process to update, modify, delete, create the projects on ours portfolio on a simple way.",
    author = "Francisco C.",
    packages= find_packages(),
    include_package_data=True,
    install_requires=[
        'Flask',
        'Flask-JWT-Extended',
        'flask-bcrypt',
        'python-dotenv',
        'pytest'
    ],
)