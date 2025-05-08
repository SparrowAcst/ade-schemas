#<a name="schemaadelabelingschemajson"></a>ADE Labeling Data Type


**Schema: [./schema/ade-labeling.schema.json](./schema/ade-labeling.schema.json)**


## Description
JSON schema for ADE data labeling. This data is stored in a "labels" collection in each database that is associated with ...


**Type:** object<br/>
**Additional Properties:** allowed<br/>
**Properties**(10)


|Name|Type|Description|Required|
|----|----|-----------|--------|
|**id**|`string`|A unique identifier for a data instance associated with a labels, wav-file, spectrogram data, etc. We use the Globally Uniform Identifier (GUID) version 4.<br/>|yes|
|**geolocation**|`object`|Reference: [Label &quot;geoLocation&quot;](#schemalabelsgeolocationschemajson)|no|
|**deviceDescription**|`object`|Reference: [Device description object](#schemaobjectsdevicedescriptionschemajson)|no|
|**Heart Sound Informativeness**||Indicates the sound information content of heart sounds.<br/>|no|
|**Lung Sound Informativeness**||Indicates the sound information content of lungs sounds.<br/>|no|
|**S3**||Indicates the S3 segments availability in the heart sound.<br/>|no|
|**S4**||Indicates the S4 segments availability in the heart sound.<br/>|no|
|**Pathological findings**|`array`|Reference: [Label &quot;Pathological findings&quot;](#schemalabelspathologicalfindingsschemajson)|no|
|**Rhythm and Arrhythmias**||Indicates the type of Rhythm and Arrhythmias in the heart sound.<br/>|no|
|**Systolic murmurs**|`array`|Reference: [Label &quot;Systolic murmurs&quot;](#schemalabelssystolicmurmursschemajson)|no|


## id 


**Description**: 
A unique identifier for a data instance associated with a labels, wav-file, spectrogram data, etc. We use the Globally Uniform Identifier (GUID) version 4.

**Type:** `string`<br/>
**Format:** `"uuid"`<br/>
 









## geolocation 

**Description**: 
Label "geoLocation"

Reference [Label &quot;geoLocation&quot;](#schemalabelsgeolocationschemajson)

## deviceDescription 

**Description**: 
Describes ...


Reference [Device description object](#schemaobjectsdevicedescriptionschemajson)

## Heart Sound Informativeness 


**Description**: 
Indicates the sound information content of heart sounds.


 

**ONE OF:**
-    Reference [Recording informativeness values](#schemavaluesinformativenessschemajson)
    







## Lung Sound Informativeness 


**Description**: 
Indicates the sound information content of lungs sounds.


 

**ONE OF:**
-    Reference [Recording informativeness values](#schemavaluesinformativenessschemajson)
    







## S3 


**Description**: 
Indicates the S3 segments availability in the heart sound.


 

**ONE OF:**
-    Reference [Segments availability values](#schemavaluessegmentsavailabilityschemajson)
    







## S4 


**Description**: 
Indicates the S4 segments availability in the heart sound.


 

**ONE OF:**
-    Reference [Segments availability values](#schemavaluessegmentsavailabilityschemajson)
    







## Pathological findings\[\] 

**Description**: 
Label "Pathological findings"

Reference [Label &quot;Pathological findings&quot;](#schemalabelspathologicalfindingsschemajson)

## Rhythm and Arrhythmias 


**Description**: 
Indicates the type of Rhythm and Arrhythmias in the heart sound.


 

**ONE OF:**
-    Reference [Rhythm and arrhythmias values](#schemavaluesrhythmandarrhythmiasschemajson)
    







## Systolic murmurs\[\] 

**Description**: 
Label "Systolic murmurs"

Reference [Label &quot;Systolic murmurs&quot;](#schemalabelssystolicmurmursschemajson)






 









#<a name="schemalabelsgeolocationschemajson"></a>Label &quot;geoLocation&quot;


**Schema: [./schema/labels/geo-location.schema.json](./schema/labels/geo-location.schema.json)**


## Description
Label "geoLocation"

**Type:** object<br/>
**Properties**(3)


|Name|Type|Description|Required|
|----|----|-----------|--------|
|**metadata**||||
|**country**|`string`|Decoded country name<br/>||
|**city**|`string`|Decoded city name<br/>||


## metadata 


**Description**: 
 

**ONE OF:**
-    **Type:** `null`<br/>
     
    
    
    
    
    
    
    
    
    
-    Reference [Geolocation metadata object](#schemaobjectsgeolocationmetadataschemajson)
    







## country 


**Description**: 
Decoded country name

**Type:** `string`<br/>
 









## city 


**Description**: 
Decoded city name

**Type:** `string`<br/>
 














 









#<a name="schemaobjectsgeolocationmetadataschemajson"></a>Geolocation metadata object


**Schema: [./schema/objects/geo-location-metadata.schema.json](./schema/objects/geo-location-metadata.schema.json)**


## Description
Parsed geolocation metadata


**Type:** object<br/>
**Properties**(5)


|Name|Type|Description|Required|
|----|----|-----------|--------|
|**continent\_code**|`string`|Continent Code<br/>||
|**country\_a2**|`string`|Country Code (Alpha 2)<br/>||
|**country\_a3**|`string`|Country Code (Alpha 3)<br/>||
|**region\_code**|`string`|Region Code<br/>||
|**state\_code**|`string`|State Code<br/>||


## continent\_code 


**Description**: 
Continent Code

**Type:** `string`<br/>
 









## country\_a2 


**Description**: 
Country Code (Alpha 2)

**Type:** `string`<br/>
 









## country\_a3 


**Description**: 
Country Code (Alpha 3)

**Type:** `string`<br/>
 









## region\_code 


**Description**: 
Region Code

**Type:** `string`<br/>
 









## state\_code 


**Description**: 
State Code

**Type:** `string`<br/>
 














 









#<a name="schemaobjectsdevicedescriptionschemajson"></a>Device description object


**Schema: [./schema/objects/device-description.schema.json](./schema/objects/device-description.schema.json)**


## Description
Describes ...


**Type:** object<br/>
**Additional Properties:** allowed<br/>
**Properties**(5)


|Name|Type|Description|Required|
|----|----|-----------|--------|
|**id**|`string`|Unique Device Identifier<br/>||
|**model**|`string`|Device Model Name<br/>||
|**osVersion**|`string`|Version of device OS<br/>||
|**stethophoneVersion**|`string`|Version of installed Stethophone mobile application<br/>||
|**appStoreRegion**|`string`|Country of App Store location<br/>||


## id 


**Description**: 
Unique Device Identifier

**Type:** `string`<br/>
**Format:** `"uuid"`<br/>
 









## model 


**Description**: 
Device Model Name

**Type:** `string`<br/>
 









## osVersion 


**Description**: 
Version of device OS

**Type:** `string`<br/>
 









## stethophoneVersion 


**Description**: 
Version of installed Stethophone mobile application

**Type:** `string`<br/>
 









## appStoreRegion 


**Description**: 
Country of App Store location

**Type:** `string`<br/>
 














 









#<a name="schemavaluesinformativenessschemajson"></a>Recording informativeness values


**Schema: [./schema/values/informativeness.schema.json](./schema/values/informativeness.schema.json)**


## Description
Available values for Recording Informativeness


 

**ONE OF:**
-    <span class="value">Good</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Good"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">Poor</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">Uninformative</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Uninformative"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">Non assessed</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Non assessed"`<br/>
     
    
    
    
    
    
    
    
    
    







#<a name="schemavaluessegmentsavailabilityschemajson"></a>Segments availability values


**Schema: [./schema/values/segments-availability.schema.json](./schema/values/segments-availability.schema.json)**


## Description
Available values for segments availability such as S3 or S4


 

**ONE OF:**
-    <span class="value">Certain</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Certain"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">Probable</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Probable"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">No</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"No"`<br/>
     
    
    
    
    
    
    
    
    
    







#<a name="schemalabelspathologicalfindingsschemajson"></a>Label &quot;Pathological findings&quot;


**Schema: [./schema/labels/pathological-findings.schema.json](./schema/labels/pathological-findings.schema.json)**


## Description
Label "Pathological findings"

**Type:** array<br/>
**Items:** Reference: [Pathological findings values](#schemavaluespathologicalfindingsschemajson)<br/>**Minimum Items:** 0<br/>
**Unique Items:** yes<br/>
 









#<a name="schemavaluespathologicalfindingsschemajson"></a>Pathological findings values


**Schema: [./schema/values/pathological-findings.schema.json](./schema/values/pathological-findings.schema.json)**


## Description
Available values for label "Pathological findings"


 

**ONE OF:**
-    <span class="value">No Patalogy</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"No Pathology"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">Ejection Sound</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Ejection Sound"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">Additional Systolic Tones</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Additional Systolic Tones"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">Summation gallop</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Summation gallop"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">Additional Diastolic Tones</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Additional Diastolic Tones"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">Pericardial Knock</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Pericardial Knock"`<br/>
     
    
    
    
    
    
    
    
    
    







#<a name="schemavaluesrhythmandarrhythmiasschemajson"></a>Rhythm and arrhythmias values


**Schema: [./schema/values/rhythm-and-arrhythmias.schema.json](./schema/values/rhythm-and-arrhythmias.schema.json)**


## Description
Available values for Rhythm and Arrhythmias


 

**ONE OF:**
-    <span class="value">No arrhythmia</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"No arrhythmia"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">Premature beats</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Premature beats"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">Atrial fibrillation</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Atrial fibrillation"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">Other arrhythmia</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Other arrhythmia"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">Undefined Rhythm</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"Undefined Rhythm"`<br/>
     
    
    
    
    
    
    
    
    
    







#<a name="schemalabelssystolicmurmursschemajson"></a>Label &quot;Systolic murmurs&quot;


**Schema: [./schema/labels/systolic-murmurs.schema.json](./schema/labels/systolic-murmurs.schema.json)**


## Description
Label "Systolic murmurs"

**Type:** array<br/>
**Items:**



 

**ONE OF:**
-    Reference [No Systolic Murmurs object](#schemaobjectsnosystolicmurmursschemajson)
    
-    Reference [Systolic murmur undetermined object](#schemaobjectssystolicmurmurundeterminedschemajson)
    
-    Reference [Ejection type murmur object](#schemaobjectsejectiontypemurmurschemajson)
    
-    Reference [Midsystolic murmur object](#schemaobjectsmidsystolicmurmurschemajson)
    
-    Reference [Holosystolic murmur object](#schemaobjectsholosystolicmurmurschemajson)
    
-    Reference [Late Systolic Murmur object](#schemaobjectslatesystolicmurmurschemajson)
    







**Minimum Items:** 0<br/>
**Unique Items:** yes<br/>
 









#<a name="schemaobjectsnosystolicmurmursschemajson"></a>No Systolic Murmurs object


**Schema: [./schema/objects/no-systolic-murmurs.schema.json](./schema/objects/no-systolic-murmurs.schema.json)**


## Description
Describes ...


**Type:** object<br/>
**Additional Properties:** allowed<br/>
**Properties**(1)


|Name|Type|Description|Required|
|----|----|-----------|--------|
|**type**|`string`|Type of murmur. Should be "No systolic murmurs"<br/>|yes|


## type 


**Description**: 
Type of murmur. Should be "No systolic murmurs"

**Type:** `string`<br/>
**Constant Value:** `"No systolic murmurs"`<br/>
 














 









#<a name="schemaobjectssystolicmurmurundeterminedschemajson"></a>Systolic murmur undetermined object


**Schema: [./schema/objects/systolic-murmur-undetermined.schema.json](./schema/objects/systolic-murmur-undetermined.schema.json)**


## Description
Describes ...


**Type:** object<br/>
**Additional Properties:** allowed<br/>
**Properties**(3)


|Name|Type|Description|Required|
|----|----|-----------|--------|
|**type**|`string`|Type of murmur Should be "Systolic murmur undetermined"<br/>|yes|
|**Grade**||Grade ...<br/>|no|
|**Unstable**|`boolean`|Indicates ...<br/>|no|


## type 


**Description**: 
Type of murmur Should be "Systolic murmur undetermined"

**Type:** `string`<br/>
**Constant Value:** `"Systolic murmur undetermined"`<br/>
 









## Grade 


**Description**: 
Grade ...


 

**ONE OF:**
-    Reference [Murmur grade values](#schemavaluesmurmurgradeschemajson)
    







## Unstable 


**Description**: 
Indicates ...

**Type:** `boolean`<br/>
 














 









#<a name="schemavaluesmurmurgradeschemajson"></a>Murmur grade values


**Schema: [./schema/values/murmur-grade.schema.json](./schema/values/murmur-grade.schema.json)**


## Description
Available values for grade of murmurs


 

**ONE OF:**
-    <span class="value">1</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"1"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">2</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"2"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">3</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"3"`<br/>
     
    
    
    
    
    
    
    
    
    
-    <span class="value">No grade</span><span>This value is used in case of ...</span><br/>**Type:** `string`<br/>
    **Constant Value:** `"No grade"`<br/>
     
    
    
    
    
    
    
    
    
    







#<a name="schemaobjectsejectiontypemurmurschemajson"></a>Ejection type murmur object


**Schema: [./schema/objects/ejection-type-murmur.schema.json](./schema/objects/ejection-type-murmur.schema.json)**


## Description
Describes ...


**Type:** object<br/>
**Properties**(7)


|Name|Type|Description|Required|
|----|----|-----------|--------|
|**type**|`string`|Type of murmur Should be "Ejection Type Murmur"<br/>|yes|
|**grade**||Grade ...<br/>|no|
|**Certain non\-significant**|`boolean`|Indicates ...<br/>|no|
|**Probable non\-significant**|`boolean`|Indicates ...<br/>|no|
|**Undetermined significance**|`boolean`|Indicates ...<br/>|no|
|**Still's Murmur**|`boolean`|Indicates ...<br/>|no|
|**Unstable**|`boolean`|Indicates ...<br/>|no|


## type 


**Description**: 
Type of murmur Should be "Ejection Type Murmur"

**Type:** `string`<br/>
**Constant Value:** `"Ejection Type Murmur"`<br/>
 









## grade 


**Description**: 
Grade ...


 

**ONE OF:**
-    Reference [Murmur grade values](#schemavaluesmurmurgradeschemajson)
    







## Certain non\-significant 


**Description**: 
Indicates ...

**Type:** `boolean`<br/>
 









## Probable non\-significant 


**Description**: 
Indicates ...

**Type:** `boolean`<br/>
 









## Undetermined significance 


**Description**: 
Indicates ...

**Type:** `boolean`<br/>
 









## Still's Murmur 


**Description**: 
Indicates ...

**Type:** `boolean`<br/>
 









## Unstable 


**Description**: 
Indicates ...

**Type:** `boolean`<br/>
 














 









#<a name="schemaobjectsmidsystolicmurmurschemajson"></a>Midsystolic murmur object


**Schema: [./schema/objects/midsystolic-murmur.schema.json](./schema/objects/midsystolic-murmur.schema.json)**


## Description
Describes...


**Type:** object<br/>
**Additional Properties:** allowed<br/>
**Properties**(7)


|Name|Type|Description|Required|
|----|----|-----------|--------|
|**type**|`string`|Type of murmur Should be "Midsystolic murmur"<br/>|yes|
|**grade**||Grade ...<br/>|no|
|**Certain non\-significant**|`boolean`|Indicates ...<br/>|no|
|**Probable non\-significant**|`boolean`|Indicates ...<br/>|no|
|**Undetermined significance**|`boolean`|Indicates ...<br/>|no|
|**Still's Murmur**|`boolean`|Indicates ...<br/>|no|
|**Unstable**|`boolean`|Indicates ...<br/>|no|


## type 


**Description**: 
Type of murmur Should be "Midsystolic murmur"

**Type:** `string`<br/>
**Constant Value:** `"Midsystolic murmur"`<br/>
 









## grade 


**Description**: 
Grade ...


 

**ONE OF:**
-    Reference [Murmur grade values](#schemavaluesmurmurgradeschemajson)
    







## Certain non\-significant 


**Description**: 
Indicates ...

**Type:** `boolean`<br/>
 









## Probable non\-significant 


**Description**: 
Indicates ...

**Type:** `boolean`<br/>
 









## Undetermined significance 


**Description**: 
Indicates ...

**Type:** `boolean`<br/>
 









## Still's Murmur 


**Description**: 
Indicates ...

**Type:** `boolean`<br/>
 









## Unstable 


**Description**: 
Indicates ...

**Type:** `boolean`<br/>
 














 









#<a name="schemaobjectsholosystolicmurmurschemajson"></a>Holosystolic murmur object


**Schema: [./schema/objects/holosystolic-murmur.schema.json](./schema/objects/holosystolic-murmur.schema.json)**


## Description
Describes ...


**Type:** object<br/>
**Additional Properties:** allowed<br/>
**Properties**(3)


|Name|Type|Description|Required|
|----|----|-----------|--------|
|**type**|`string`|Type of murmur Should be "Holosystolic murmur"<br/>|yes|
|**grade**||Grade ...<br/>|no|
|**Unstable**|`boolean`|Indicates ...<br/>|no|


## type 


**Description**: 
Type of murmur Should be "Holosystolic murmur"

**Type:** `string`<br/>
**Constant Value:** `"Holosystolic murmur"`<br/>
 









## grade 


**Description**: 
Grade ...


 

**ONE OF:**
-    Reference [Murmur grade values](#schemavaluesmurmurgradeschemajson)
    







## Unstable 


**Description**: 
Indicates ...

**Type:** `boolean`<br/>
 














 









#<a name="schemaobjectslatesystolicmurmurschemajson"></a>Late Systolic Murmur object


**Schema: [./schema/objects/late-systolic-murmur.schema.json](./schema/objects/late-systolic-murmur.schema.json)**


## Description
Describes ...


**Type:** object<br/>
**Additional Properties:** allowed<br/>
**Properties**(3)


|Name|Type|Description|Required|
|----|----|-----------|--------|
|**type**|`string`|Type of murmur Should be "Late Systolic Murmur"<br/>|yes|
|**Grade**||Grade ...<br/>|no|
|**Unstable**|`boolean`|Indicates ...<br/>|no|


## type 


**Description**: 
Type of murmur Should be "Late Systolic Murmur"

**Type:** `string`<br/>
**Constant Value:** `"Late Systolic Murmur"`<br/>
 









## Grade 


**Description**: 
Grade ...


 

**ONE OF:**
-    Reference [Murmur grade values](#schemavaluesmurmurgradeschemajson)
    







## Unstable 


**Description**: 
Indicates ...

**Type:** `boolean`<br/>
 














 










