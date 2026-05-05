let user = {
    name : 'Dheeraj',
}

console.log('User: ' , user);

let admin = user;

console.log('Admin: ' , admin);

console.log('Accessing user data through admin using the concept of referenceing' ,  admin.name);

admin.name = 'Dheeraj Kaushik';

console.log('Changing name value in user object using admin using the concept of referencing' , user.name);