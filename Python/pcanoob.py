import pandas as pd
import matplotlib.pyplot as plt 
import numpy

Iris = pd.read_csv("Iris2.csv")
X = Iris[['SepalLengthCm','SepalWidthCm','PetalLengthCm','PetalWidthCm']]
y = Iris.target_names

from sklearn.preprocessing import StandardScaler
X = StandardScaler().fit_transform(X)

from sklearn.decomposition import PCA 
pca = PCA(n_components=2)
Y_sklearn = pca.fit_transform(X)

#sklearn_pca.explained_variance_ratio_

#print (sklearn_pca.explained_variance_ratio_)
print (Y_sklearn[0])
print ('---')
print (Y_sklearn[1])
print ('---')
print (Y_sklearn[2])
print ('---')
print (Y_sklearn[3])

with plt.style.context('seaborn-whitegrid'):
    plt.figure(figsize=(6, 4))
    
    #archivo = open('pcairis.csv',"a")  # apertura de archivo
#    archivo.write(cadena)  # escritura de los datos
 #   archivo.close() 

    for lab, col in zip(('Iris-versicolor', 'Iris-virginica'),('red', 'green')):
  
    #for lab,col in [('Iris-versicolor', 'red'),('Iris-virginica', 'green') ]:
        #print (Y_sklearn[y==lab, 0],Y_sklearn[y==lab, 1],lab,col)
        plt.scatter(Y_sklearn[y==lab, 0],Y_sklearn[y==lab, 1],label=lab,c=col)
    
        #archivo = open('pcairis3.csv',"a")
        for i in (Y_sklearn['Iris-versicolor']):
            
            print (i)
        
            cadena = (str(i)+','+str(lab)+'\n')
            #archivo.write(cadena)  # escritura de los datos
            
            
            #archivo.close() 

        
        #print (lab)
        #print (y)
        
    plt.xlabel('Componente Principal 1')
    plt.ylabel('Componente Principal 2')
    plt.legend(loc='lower right')
    plt.tight_layout()
    plt.show()
    #print(X)
    
    #print (X.Species)
    # a = numpy.asarray(Y_sklearn[y==lab, 1])
    # numpy.savetxt("foo1.csv", a, delimiter=",")
    # print (Y_sklearn[y==lab, 0])
    # b = numpy.asarray(Y_sklearn[y==lab, 0])
    # numpy.savetxt("foo0.csv", b, delimiter=",")


#print (type(Y_sklearn))
#print (Y_sklearn[0])
# import numpy
# a = numpy.asarray(Y_sklearn, 0)
# numpy.savetxt("foo.csv", a, delimiter=",")





