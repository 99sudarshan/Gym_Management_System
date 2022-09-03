from rest_framework import serializers
from authusers.models import CustomUser
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = "id","username","first_name","last_name","email","user_type",'password'

    def create(self, data):
        return CustomUser.objects.create_user(**data)


class ChangePasswordSerializer(serializers.Serializer):
    model = CustomUser

    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True, validators=[validate_password])
    new_password2= serializers.CharField(required=True)
    
            
class RegisterSerializer(serializers.ModelSerializer):
    
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ('id','username', 'password', 'password2', 'email', 'first_name', 'last_name','user_type')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
                   
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password":"Password fields didn't match."})
        return attrs
    
    
    def create(self, validated_data):
        user = CustomUser.objects.create(
            username=validated_data
            ['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        
        user.set_password(validated_data['password'])
        user.save()
        return user