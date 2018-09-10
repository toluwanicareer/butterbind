from django.test import TestCase
from .core import get_annual_premium

# Create your tests here.

class TestApp(TestCase):

    def test_core_function(self):
        self.assertEqual(get_annual_premium('200 N MIDLAND ST, VISALIA, CA 93291'), 1856.0)
        self.assertEqual(get_annual_premium('jskjefbf fhbf'), False)

