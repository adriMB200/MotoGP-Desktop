import xml.etree.ElementTree as ET

def xml_to_kml(xml_string):
    # Parse the XML string
    root = ET.fromstring(xml_string)
    
    # Create the KML structure
    kml = ET.Element('kml', xmlns="http://www.opengis.net/kml/2.2")
    document = ET.SubElement(kml, 'Document')
    
    # Iterate through XML elements and convert to KML Placemarks
    for tramo in root.findall('.//tramo'):
        kml_placemark = ET.SubElement(document, 'Placemark')
        
        sector = tramo.find('sector')
        if sector is not None:
            ET.SubElement(kml_placemark, 'name').text = f"Tramo {sector.text}"

        coords = tramo.find('coordenadas')
        if coords is not None:
            lon = coords.find('longitud').text
            lat = coords.find('latitud').text
            alt = coords.find('altitud').text
        kml_point = ET.SubElement(kml_placemark, 'Point')
        ET.SubElement(kml_point, 'coordinates').text = f"{lon},{lat},{alt}"
    
    # Convert the KML structure to a string
    kml_string = ET.tostring(kml, encoding='utf-8', method='xml').decode('utf-8')
    return kml_string

if __name__ == "__main__":
    with open("circuitoEsquema.xml", "r", encoding="utf-8") as f:
        xml_data = f.read()

    kml_out = xml_to_kml(xml_data)

    with open("circuito.kml", "w", encoding="utf-8") as f:
        f.write(kml_out)

    print("KML generado")

