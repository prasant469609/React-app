# catalog/management/commands/populate_products.py
from django.core.management.base import BaseCommand
from catalog.models import Product

class Command(BaseCommand):
    help = 'Populate the database with products'

    def handle(self, *args, **kwargs):
        products = [
            {"name": "Product 1", "description": "Description 1", "price": 10.00},
            {"name": "Product 2", "description": "Description 2", "price": 20.00},
            {"name": "Product 3", "description": "Description 3", "price": 30.00},
            {"name": "Product 4", "description": "Description 4", "price": 40.00},
            {"name": "Product 5", "description": "Description 5", "price": 50.00},
            {"name": "Product 6", "description": "Description 6", "price": 60.00},
            {"name": "Product 7", "description": "Description 7", "price": 70.00},
            {"name": "Product 8", "description": "Description 8", "price": 80.00},
            {"name": "Product 9", "description": "Description 9", "price": 90.00},
            {"name": "Product 10", "description": "Description 10", "price": 100.00},
        ]
        for product in products:
            Product.objects.create(**product)
        self.stdout.write(self.style.SUCCESS('Successfully populated products'))