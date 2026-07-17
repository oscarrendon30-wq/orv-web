import os
import re

def update_file(path, replacements):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        if old not in content:
            print(f"WARNING: Could not find '{old[:50]}...' in {path}")
        content = content.replace(old, new)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {path}")

es_replacements = [
    # Services
    ('te muestro cómo puedo ayudarte a construir', 'te muestro cómo construir'),
    ('Creamos identidades', 'Creación de identidades'),
    ('Diseñamos un sistema', 'Desde Oscar Rendón Visual se diseña un sistema'),
    ('posicionan tu marca', 'posicionan cada marca'),
    ('Desarrollamos feeds', 'Se desarrollan feeds'),
    ('Diseñamos plantillas', 'Se diseñan plantillas'),
    ('enganchan a tu audiencia ideal', 'enganchan a la audiencia ideal'),
    ('Diagramamos y maquetamos', 'Se diagraman y maquetan'),
    ('Cuidamos rigurosamente', 'Se cuida rigurosamente'),
    ('Diseñamos láminas', 'Se diseñan láminas'),
    ('Estructuramos la información', 'Se estructura la información'),
    ('Diseñamos interfaces', 'Se diseñan interfaces'),
    ('Estructuramos el flujo', 'Se estructura el flujo'),
    ('Diseñamos empaques', 'Se diseñan empaques'),
    ('Aseguramos que', 'Se asegura que'),
    ('conecte emocionalmente con tu cliente', 'conecte emocionalmente con el cliente'),
    
    # Portfolio
    ('Construyamos una presencia visual', 'Es momento de construir una presencia visual'),
    ('Hablemos de tu proyecto', 'Contactar para un proyecto'),
    
    # About
    ('Soy diseñador gráfico senior en', 'Oscar Rendón Visual es un estudio de diseño gráfico en'),
    ('A lo largo de mi trayectoria, me he especializado en', 'A lo largo de 30 años de trayectoria, la especialidad se ha centrado en'),
    ('de mis clientes', 'de los clientes'),
    ('Mi enfoque combina', 'El enfoque de Oscar Rendón Visual combina'),
    ('Ofrezco un servicio de diseño altamente personalizado bajo la modalidad de', 'Se ofrece un servicio de diseño altamente personalizado bajo la modalidad de'),
    (', lo que me permite colaborar', ', lo que permite colaborar'),
    
    # FAQ
    ('Iniciamos con una sesión de diagnóstico', 'Cada proyecto inicia con una sesión de diagnóstico'),
    ('entender tus objetivos, necesidades y presupuesto.', 'entender objetivos, necesidades y presupuesto.'),
    ('elaboro una propuesta de trabajo', 'se elabora una propuesta de trabajo'),
    ('comenzamos la fase de conceptualización.', 'comienza la fase de conceptualización.'),
    ('el 100% de mis proyectos se gestionan', 'el 100% de los proyectos se gestionan'),
    ('Trabajo desde Pereira, Colombia, y colaboro sin inconvenientes', 'Desde Pereira, Colombia, se colabora sin inconvenientes'),
    ('Entrego todos los archivos finales', 'Se entregan todos los archivos finales'),
    ('todos mis proyectos incluyen', 'todos los proyectos incluyen'),
    ('diseño para ambos mundos. Cuento con una profunda experiencia', 'el diseño abarca ambos mundos. Se cuenta con una profunda experiencia'),
    ('estructuro y diseño feeds profesionales', 'se estructuran y diseñan feeds profesionales'),
    ('Puedes contratar una pieza puntual', 'Se puede contratar una pieza puntual'),
    ('que necesites.', 'requeridos.'),
    ('podemos definir paquetes mensuales', 'se definen paquetes mensuales'),
    
    # Authority
    ('combino diseño de autor, criterio editorial y visión comercial para construir', 'Oscar Rendón Visual combina diseño de autor, criterio editorial y visión comercial para construir'),
]

en_replacements = [
    # Services
    ("I'll show you how I can help you build", "discover how to build"),
    ("We create solid", "Creation of solid"),
    ("We design a complete", "Oscar Rendón Visual designs a complete"),
    ("position your brand", "position each brand"),
    ("We develop strategically", "Strategically structured feeds are developed"),
    ("We design custom", "Custom templates are designed"),
    ("engage your ideal audience", "engage the ideal audience"),
    ("We layout and format", "Layout and formatting of"),
    ("We rigorously take care", "Rigorous care is taken"),
    ("We design corporate", "Corporate visual slides are designed"),
    ("We structure dense", "Dense information is structured"),
    ("We design minimalist", "Minimalist interfaces are designed"),
    ("We structure the user flow", "User flow is structured"),
    ("We design commercial packaging", "Commercial packaging is designed"),
    ("We ensure that", "It is ensured that"),
    ("with your end customer", "with the end customer"),
    
    # Portfolio
    ("Let's build a clear", "It is time to build a clear"),
    ("Let's talk about your project", "Contact for a project"),
    
    # About
    ("I am a senior graphic designer in", "Oscar Rendón Visual is a senior graphic design studio in"),
    ("Throughout my career, I have specialized in", "Throughout 30 years of experience, the specialty has been centered on"),
    ("of my clients", "of the clients"),
    ("My approach combines", "The approach of Oscar Rendón Visual combines"),
    ("I offer a highly personalized design service under the modality of", "A highly personalized design service is offered under the modality of"),
    (", which allows me to collaborate", ", which allows collaborating"),
    
    # FAQ
    ("We start with a diagnostic session", "Each project starts with a diagnostic session"),
    ("understand your objectives, needs, and budget.", "understand objectives, needs, and budget."),
    ("I develop a structured work proposal", "a structured work proposal is developed"),
    ("we begin the conceptualization phase.", "the conceptualization phase begins."),
    ("100% of my projects are managed", "100% of the projects are managed"),
    ("I work from Pereira, Colombia, and collaborate seamlessly", "From Pereira, Colombia, seamless collaboration is done"),
    ("I deliver all final files", "All final files are delivered"),
    ("all my projects include", "all projects include"),
    ("I design for both worlds. I have deep technical experience", "the design covers both worlds. There is deep technical experience"),
    ("I structure and design professional feeds", "professional feeds are structured and designed"),
    ("You can hire a specific piece", "A specific piece can be hired"),
    ("that you need.", "required."),
    ("we can define monthly packages", "monthly packages are defined"),
    
    # Authority
    ("I combine author design, editorial criteria, and commercial vision to build", "Oscar Rendón Visual combines author design, editorial criteria, and commercial vision to build"),
]

es_path = os.path.join("src", "translations", "es.ts")
en_path = os.path.join("src", "translations", "en.ts")

update_file(es_path, es_replacements)
update_file(en_path, en_replacements)
