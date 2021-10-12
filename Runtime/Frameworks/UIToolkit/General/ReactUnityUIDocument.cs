#if UNITY_2021_2_OR_NEWER
using ReactUnity.Helpers;
using ReactUnity.Scheduling;
using ReactUnity.Styling.Rules;
using UnityEngine;
using UnityEngine.UIElements;

namespace ReactUnity.UIToolkit
{
    [RequireComponent(typeof(UIDocument))]
    [RequireComponent(typeof(AudioSource))]
    public class ReactUnityUIDocument : ReactUnityBase
    {
        public VisualElement Root => GetComponent<UIDocument>()?.rootVisualElement;

        protected override void ClearRoot()
        {
            Root?.Clear();
        }

        protected override ReactContext CreateContext(ScriptSource script)
        {
            var globals = GlobalRecord.BindSerializableDictionary(Globals, dispatcher, false);
            return new UIToolkitContext(Root, globals, script, dispatcher, timer ?? UnityTimer.Instance, MediaProvider, Render, PlayAudio);
        }

        public void PlayAudio(AudioClip clip)
        {
            var source = GetComponent<AudioSource>();
            source.PlayOneShot(clip);
        }

        protected override IMediaProvider CreateMediaProvider()
        {
            return DefaultMediaProvider.CreateMediaProvider("runtime", "uitoolkit", false);
        }
    }
}
#endif
