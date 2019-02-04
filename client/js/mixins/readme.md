# Mixins

## externalVariableAssignment.mixins

Permet d'assigner des variables depuis le template de Vue directement et de manière global (uniquement sur la Vue principale pour le moment, mais peut être déployé au composant si besoin).

**Utilisation**

```
{{ 
    assignData(
                'validationFormClient_fieldsList',
                '[{"value":0,"label":"Air France","selected":false},{"value":1,"label":"Rayanair","selected":false},{"value":5,"label":"Easy Jet","selected":true}]'
            )
}}
```